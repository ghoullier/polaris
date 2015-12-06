const ZP_WEAK_AUTHENTIFICATION_ID = 'IXG-';

export default class WeakAuthent extends zp.authent.Weak {
  constructor() {
    super(ZP_WEAK_AUTHENTIFICATION_ID);
  }
}
