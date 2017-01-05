import I18n from 'react-native-i18n';


export default function() {
  return function(serviceName) {
    I18n.fallbacks = true;

    let languageCode = I18n.locale.substr(0,2);

    I18n.translations = {
      en: require('../../I18n/english.json')
    }

    switch(languageCode){
      case 'af':
        I18n.translations.af = require('../../I18n/af.json');
        break;
      case 'am':
        I18n.translations.am = require('../../I18n/am.json');
        break;
      case 'ar':
        I18n.translations.ar = require('../../I18n/ar.json');
        break;
      case 'bg':
        I18n.translations.bg = require('../../I18n/bg.json');
        break;
      case 'ca':
        I18n.translations.ca = require('../../I18n/ca.json');
        break;
      case 'cs':
        I18n.translations.cs = require('../../I18n/cs.json');
        break;
      case 'da':
        I18n.translations.da = require('../../I18n/da.json');
        break;
      case 'de':
        I18n.translations.de = require('../../I18n/de.json');
        break;
      case 'el':
        I18n.translations.el = require('../../I18n/el.json');
        break;
      case 'es':
        I18n.translations.es = require('../../I18n/es.json');
        break;
      case 'et':
        I18n.translations.et = require('../../I18n/et.json');
        break;
      case 'fi':
        let addCode = I18n.locale.substr(0,3);
        if (addCode == 'fil'){
          I18n.translations.fil = require('../../I18n/fil.json');
        } else {
          I18n.translations.fi = require('../../I18n/fi.json');
        }
        break;
      case 'fr':
        I18n.translations.fr = require('../../I18n/fr.json');
        break;
      case 'he':
        I18n.translations.he = require('../../I18n/he.json');
        break;
      case 'hi':
        I18n.translations.hi = require('../../I18n/hi.json');
        break;
      case 'hr':
        I18n.translations.hr = require('../../I18n/hr.json');
        break;
      case 'hu':
        I18n.translations.hu = require('../../I18n/hu.json');
        break;
      case 'in':
        I18n.translations.in = require('../../I18n/id.json');
        break;
      case 'id':
        I18n.translations.id = require('../../I18n/id.json');
        break;
      case 'it':
        I18n.translations.it = require('../../I18n/it.json');
        break;
      case 'ja':
        I18n.translations.ja = require('../../I18n/ja.json');
        break;
      case 'ko':
        I18n.translations.ko = require('../../I18n/ko.json');
        break;
      case 'lt':
        I18n.translations.lt = require('../../I18n/lt.json');
        break;
      case 'lv':
        I18n.translations.lv = require('../../I18n/lv.json');
        break;
      case 'ms':
        I18n.translations.ms = require('../../I18n/ms.json');
        break;
      case 'nb':
        I18n.translations.nb = require('../../I18n/nb.json');
        break;
      case 'nl':
        I18n.translations.nl = require('../../I18n/nl.json');
        break;
      case 'no':
        I18n.translations.no = require('../../I18n/no.json');
        break;
      case 'pl':
        I18n.translations.pl = require('../../I18n/pl.json');
        break;
      case 'pt':
        I18n.translations.pt = require('../../I18n/pt.json');
        break;
      case 'ro':
        I18n.translations.ro = require('../../I18n/ro.json');
        break;
      case 'ru':
        I18n.translations.ru = require('../../I18n/ru.json');
        break;
      case 'sl':
        I18n.translations.sl = require('../../I18n/sl.json');
        break;
      case 'sk':
        I18n.translations.sk = require('../../I18n/sk.json');
        break;
      case 'sr':
        I18n.translations.sr = require('../../I18n/sr.json');
        break;
      case 'sv':
        I18n.translations.sv = require('../../I18n/sv.json');
        break;
      case 'sw':
        I18n.translations.sw = require('../../I18n/sw.json');
        break;
      case 'th':
        I18n.translations.th = require('../../I18n/th.json');
        break;
      case 'tr':
        I18n.translations.tr = require('../../I18n/tr.json');
        break;
      case 'uk':
        I18n.translations.uk = require('../../I18n/uk.json');
        break;
      case 'vi':
        I18n.translations.vi = require('../../I18n/vi.json');
        break;
      case 'zh':
        I18n.translations.zh = require('../../I18n/zh.json');
        break;
      case 'zu':
        I18n.translations.zu = require('../../I18n/zu.json');
        break;
    }

    return I18n;
  }
}
