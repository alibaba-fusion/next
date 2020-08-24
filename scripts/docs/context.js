const defaultConfig = require('./config');
const pkgJson = require('../../package.json');

const parsePkgName = () => {
    let scope = '';
    let name = '';
    let version = '';
    if (pkgJson.name[0] === '@') {
        [scope, name] = pkgJson.name.split('/');
    } else {
        name = pkgJson.name;
    }
    if (/@/.test(name)) {
        [name, version] = name.split('@');
    }
    return { scope, name, version, pkgname: scope ? `${scope}/${name}` : name };
};

/**
 *
 *
 * 在这里维护 render context
 *
 */
module.exports = {
    locale: 'zh-cn',
    // iconname: 'fuckicon',
    bgColor: 'white',
    themepkg: parsePkgName(),
    comp: {
        groupName: pkgJson.name,
        version: pkgJson.version,
    },
    loop: {
        index: 0,
    },
    helper: {
        // 先不做环境区分
        getStaticPath(tail) {
            let urlBase = '';

            if (defaultConfig.version) {
                urlBase = `${defaultConfig.url}/${defaultConfig.version}`;
            } else {
                urlBase = defaultConfig.url;
            }

            return `${urlBase}/${tail}`;
        },
        isAliEnv() {
            return false;
        },
        getRetcode() {},
    },
    ctx: {
        helper: {
            demo: {
                getNextCompRiddleFormValue() {
                    return `<button type="submit" class="preview-btn">
                        <svg class="preview-paltform-icon" width="76px" height="78px" viewBox="0 0 76 78" version="1.1">
                            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="Group" fill="#FFF">
                                    <path d="M35.0196078,42.0857143 L46.6123615,42.0857143 C55.4390626,42.0857143 62.5882353,34.9350621 62.5882353,26.1142857 C62.5882353,17.2915698 55.4355929,10.1428571 46.6123615,10.1428571 L3.99843066,10.1428571 C1.78894984,10.1428571 0,11.932423 0,14.1399644 L0,34.0870052 C0,37.7978527 2.53072603,40.9248679 5.96078431,41.8250425 L5.96078431,32.9142857 L6,32.9142857 L6,16.2000008 L46.648359,16.2000008 C52.1444977,16.2000008 56.5999985,20.6535592 56.5999985,26.1500006 C56.5999985,31.6452337 52.1539336,36.1000004 46.648359,36.1000004 L35.0196078,36.1000004 L35.0196078,42.0857143 Z" id="Combined-Shape"></path>
                                    <rect id="Rectangle-5" transform="translate(37.647059, 74.530075) rotate(90.000000) translate(-37.647059, -74.530075) " x="34.6470588" y="37.1428571" width="6" height="74.7744361" rx="3"></rect>
                                    <rect id="Rectangle-5" x="0" y="11.1428571" width="6" height="66.5492481" rx="3"></rect>
                                    <rect id="Rectangle-5" transform="translate(32.803922, 64.197274) rotate(90.000000) translate(-32.803922, -64.197274) " x="29.8039216" y="44.9428571" width="6" height="38.5088346" rx="3"></rect>
                                    <path d="M55.8823529,51.0283125 C66.8071299,47.949948 74.8110138,37.9101927 74.8110138,26 C74.8110138,11.6374393 63.1727798,0 48.8162906,0 L20.6637313,0 C16.2536885,0 12.6666667,3.58030617 12.6666667,7.99683765 L12.6666667,44.0031624 C12.6666667,47.5852562 15.0154228,50.6107344 18.254902,51.631385 L18.254902,44.5714286 L18.748254,44.5714286 C18.6951642,44.391285 18.6666667,44.2004209 18.6666667,44.0027084 L18.6666667,7.99729162 C18.6666667,6.89421792 19.5557309,6 20.6575807,6 L48.6718036,6 C59.7146616,6 68.6666667,14.9518764 68.6666667,26 C68.6666667,34.5025876 63.3614245,41.7659474 55.8823529,44.6598019 L55.8823529,51.0283125 Z" id="Combined-Shape"></path>
                                    <rect id="Rectangle-5" transform="translate(64.070451, 60.540753) rotate(-30.000000) translate(-64.070451, -60.540753) " x="61.0705954" y="42.5957536" width="5.99971081" height="35.8899994" rx="2.9998554"></rect>
                                    <rect id="Rectangle-5" x="12.6666667" y="30.0857143" width="6" height="37.0133459" rx="3"></rect>
                                    <rect id="Rectangle-5" transform="translate(42.240636, 51.162340) rotate(-30.000000) translate(-42.240636, -51.162340) " x="39.2406356" y="34.3380917" width="6" height="33.6484962" rx="3"></rect>
                                </g>
                            </g>
                        </svg>
                        Riddle
                    </button>`;
                },
                getNextCompCodepenFormValue() {
                    return `<button class="preview-btn" type="submit">
                        <svg class="preview-paltform-icon" viewBox="0 0 100 100" width="100%" height="100%"><path d="M100 34.2c-.4-2.6-3.3-4-5.3-5.3-3.6-2.4-7.1-4.7-10.7-7.1-8.5-5.7-17.1-11.4-25.6-17.1-2-1.3-4-2.7-6-4-1.4-1-3.3-1-4.8 0-5.7 3.8-11.5 7.7-17.2 11.5L5.2 29C3 30.4.1 31.8 0 34.8c-.1 3.3 0 6.7 0 10v16c0 2.9-.6 6.3 2.1 8.1 6.4 4.4 12.9 8.6 19.4 12.9 8 5.3 16 10.7 24 16 2.2 1.5 4.4 3.1 7.1 1.3 2.3-1.5 4.5-3 6.8-4.5 8.9-5.9 17.8-11.9 26.7-17.8l9.9-6.6c.6-.4 1.3-.8 1.9-1.3 1.4-1 2-2.4 2-4.1V37.3c.1-1.1.2-2.1.1-3.1 0-.1 0 .2 0 0zM54.3 12.3L88 34.8 73 44.9 54.3 32.4V12.3zm-8.6 0v20L27.1 44.8 12 34.8l33.7-22.5zM8.6 42.8L19.3 50 8.6 57.2V42.8zm37.1 44.9L12 65.2l15-10.1 18.6 12.5v20.1zM50 60.2L34.8 50 50 39.8 65.2 50 50 60.2zm4.3 27.5v-20l18.6-12.5 15 10.1-33.6 22.4zm37.1-30.5L80.7 50l10.8-7.2-.1 14.4z"></path></svg>
                        CodePen
                    </button>`;
                },
            },
        },
    },
};
