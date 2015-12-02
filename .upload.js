'use strict';

angular.module('ZetaPush', [])
.service('zpSrvc', function ($rootScope, $CONSTANTS) {

	// flag to know wich authentication has been used
	var authentType, authent, weakAuthent;

	// Initialization of ZetaPush connection with a log level parameter
	zp.init($CONSTANTS.SERVER_STR, $CONSTANTS.BusinessId, 'info');

	// Authomatic Resource Creation
	if (!localStorage['resource']){
		localStorage['resource']= zp.makeResourceId();
	}
	var resource= localStorage['resource'];

	zp.on('/meta/handshake', function(msg){
		console.log('ZetaPush_Hanshake_Successful', msg);

	});

	// meta channel to know if you're connected
	zp.on('/meta/connected', function(msg){
		if (msg.successful){
			if (authentType === 'weak'){
				if (weakAuthent.getToken()){
					localStorage['token']= weakAuthent.getToken();
					localStorage['publicToken']= weakAuthent.getPublicToken();
				}
			}
			console.log('You are connected');
			$rootScope.$broadcast('zetapushConnected');
		}
	});

	function connect(login, password){
		// Connect
		authentType= 'simple';
		authent= new ZetaPush.authent.Simple($CONSTANTS.AuthentDepId);
		zp.connect(authent.getConnectionData(login, password, resource));
	}
	function weakConnect(token){
		authentType= 'weak';
		weakAuthent= new ZetaPush.authent.Weak($CONSTANTS.WeakDepId);
		zp.connect(weakAuthent.getConnectionData(token));
	}

	return {
		connect: connect,
		weakConnect: weakConnect
	};

})
.service('zpUploadSrvc', function ($rootScope, $CONSTANTS) {

	var zpfs= new ZetaPush.service.FileSystem($CONSTANTS.UploadDepId);
	var currentUpload= null;

	// meta channel to know if you're connected
	zp.on('/meta/connected', function(msg){
		if (msg.successful){
			// Should check if the directory exists before creating it ....
			//zpfs.mkdir($CONSTANTS.ZSDirectory);
		}
	});

	zpfs.onNewUploadUrl(function(msg){
		console.log('newUploadUrl', msg);
		$.ajax({
			url:  msg.data.url,
			type: msg.data.httpMethod,
			data: currentUpload,
			contentType: currentUpload.type,
			processData: false,
			error:function(){
				console.log('Error when uploading file');
			},
			success:function() {
					// Send a validation to ZetaPush server
					// You can provide metadata and tags if needed
					zpfs.newFile(msg.data.guid);
				}
			});
	});

	// Callback function for ls verb
	zpfs.onLs(function(msg){
		console.log('ls', msg);
	});
	// Callback function for a new file event
	// when you add a file, this callback will be called
	zpfs.onNewFile(function(msg){
		console.log('newFile', msg);
	});

	zpfs.onUpdateMeta(function(msg){
		console.log('onUpdateMeta', msg);
		$rootScope.$broadcast('new_image', msg.data);
	});

	zpfs.onRm(function(msg){
		$rootScope.$broadcast('delete_image', msg.data);
	});

	function newUpload(file){
		currentUpload= file;
		//file.name= '/zetasnap/'+ file.name;
		zpfs.newUploadUrl($CONSTANTS.ZSDirectory, file.type);
	}

	function ls(path){
		zpfs.ls(path);
	}

	function rm(path){
		zpfs.rm(path);
	}

	return {
		newUpload: newUpload,
		ls: ls,
		rm: rm
	};

})
.service('zpGroupSrvc', function ($rootScope, $CONSTANTS) {

	var groupsSrvc= new ZetaPush.service.Group($CONSTANTS.GroupsDepId);

	groupsSrvc.onError(function(msg){
		console.log('groupsSrvc Error', msg);
	});

	groupsSrvc.onGrant(function(msg){
		console.log('onGrant', msg);
	});

	groupsSrvc.onCreateGroup(function(msg){
		console.log('onCreateGroup', msg);
		// Grant rights ADDMYSELF on the * group for the newly created group
		// Everybody will be able to join the newly created group
		// For weak authenticated users, a simple call to addMe with the group name will work

		groupsSrvc.grant('*', $CONSTANTS.GroupsDepId +':'+ msg.data.owner + ':'+ msg.data.group, 'GroupManagement.ADDMYSELF');

		// Create rights for a stack
		groupsSrvc.grant(msg.data.group, $CONSTANTS.StackDepId +':'+ msg.data.owner + ':zetastack', 'push');
		groupsSrvc.grant(msg.data.group, $CONSTANTS.StackDepId +':'+ msg.data.owner + ':zetastack', 'remove');
		groupsSrvc.grant(msg.data.group, $CONSTANTS.StackDepId +':'+ msg.data.owner + ':zetastack', 'list');
	});

	function createGroup(group, groupName){
		groupsSrvc.createGroup(group, groupName);
	}

	function addMe(group, owner){
		groupsSrvc.addMe(group, $CONSTANTS.AuthentDepId + ':' + owner);
	}

	return {
		createGroup: createGroup,
		addMe: addMe
	};

})
.service('zpMessagingSrvc', function($rootScope, $CONSTANTS){

	var msgSrvc= new ZetaPush.service.Messaging($CONSTANTS.MessagingDepId);

	msgSrvc.onMessage(function(msg){
		$rootScope.$broadcast('new_message', msg.data);
	});

	function sendMessage(user, msg){
		msgSrvc.sendMessage($CONSTANTS.AuthentDepId+':'+user, msg);
	}

	return {
		sendMessage: sendMessage
	};
})
.service('zpStackSrvc', function($rootScope, $CONSTANTS){

	var stackSrvc= new ZetaPush.service.Stack($CONSTANTS.StackDepId);

	stackSrvc.onError(function(msg){
		console.log('onError', msg);
	});

	stackSrvc.onPush(function(msg){
		console.log('onPush', msg);
	});

	stackSrvc.onSetListeners(function(msg){
		console.log('onSetListeners', msg);
	});

	function associateGroup(owner, group, stack){
		var fullGroup= $CONSTANTS.GroupsDepId + ':' + $CONSTANTS.AuthentDepId + ':' + owner + ':' + group;
		stackSrvc.setListeners(stack, [fullGroup]);
	}

	function push(owner, stack, data){
		stackSrvc.push(stack, data, $CONSTANTS.AuthentDepId + ':' + owner);
	}

	return {
		associateGroup: associateGroup,
		push: push
	};
})
.service('zpMacroSrvc', function($rootScope, $CONSTANTS){

	var macroSrvc= new ZetaPush.service.Macro($CONSTANTS.MacroDepId);

	macroSrvc.onCompleted(function(msg){
		console.log("Macro onCompleted", msg);
		$rootScope.$broadcast('macro_completed', msg.data);
	});

	function call(macroName, params){
		macroSrvc.call(macroName, params);
	}

	return {
		call: call
	};
})
;
