/*
- Mau Yang No Enc? Beli Lah
- Harga Cuman 50k No Enc 100%
- Wa Gua : 0857-2749-2435
- Wa Bot : 0812-1562-6270
*/

'use strict'
const {
    default: makeWASocket,
    useSingleFileAuthState,
    downloadContentFromMessage,
  } = require('@adiwajshing/baileys'),
  fs = require('fs'),
  qrcode = require('qrcode-terminal'),
  axios = require('axios'),
  logg = require('pino'),
  cheerio = require('cheerio'),
  moment = require('moment-timezone'),
  Dym = require('didyoumean'),
  hikki = require('hikki-me'),
  JavaScriptObfuscator = require('javascript-obfuscator'),
  hx = require('hxz-api'),
  util = require('util'),
  brainly = require('brainly-scraper'),
  Jimp = require('jimp'),
  imageToBase64 = require('image-to-base64'),
  { exec, spawn } = require('child_process'),
  ffmpeg = require('fluent-ffmpeg'),
  speed = require('performance-now'),
  qs = require('querystring'),
  { Primbon } = require('scrape-primbon'),
  primbon = new Primbon(),
  request = require('request'),
  FormData = require('form-data'),
  fetch = (..._0x11fdda) =>
    import('node-fetch').then(({ default: _0x1e7a0f }) =>
      _0x1e7a0f(..._0x11fdda)
    ),
  path = require('path'),
  ms = require('parse-ms'),
  toMS = require('ms'),
  nou = require('node-os-utils'),
  _sewa = require('./lib/sewa'),
  _prem = require('./lib/premium')
let { sizeFormatter } = require('human-readable'),
  format = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (_0x3b90d5, _0x20671e) => _0x3b90d5 + ' ' + _0x20671e + 'B',
  })
const Exif = require('./lib/exif'),
  exif = new Exif()
let caklontong = [],
  susunkata = [],
  siapakahaku = [],
  tebakkalimat = [],
  tebakkata = [],
  tebakkimia = [],
  tebaktebakan = [],
  tekateki = [],
  tebakgambar = [],
  tebakgame = []
const {
    isSetLeft,
    addSetLeft,
    removeSetLeft,
    changeSetLeft,
    getTextSetLeft,
  } = require('./lib/data/setleft'),
  { Musikmatch } = require('./lib/scrape/lirik'),
  { igProfile, insta, igstory } = require('./lib/instagram'),
  { addBalance, kurangBalance, getBalance } = require('./lib/server/money'),
  {
    isGame,
    gameAdd,
    limitAdd,
    givegame,
    cekGLimit,
  } = require('./lib/server/limit'),
  {
    addPlayGame,
    getJawabanGame,
    isPlayGame,
    cekWaktuGame,
    getGamePosi,
  } = require('./lib/server/game'),
  { color, bgcolor } = require('./lib/color'),
  { addCmd, AddHituser } = require('./lib/server/hitbot.js'),
  {
    isSetWelcome,
    changeSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    getTextSetWelcome,
  } = require('./lib/data/setwelcome.js'),
  { bytesToSize, checkBandwidth } = require('./lib/function.js'),
  {
    serialize,
    getBuffer,
    fetchJson,
    fetchText,
    getRandom,
    getGroupAdmins,
    runtime,
    sleep,
    generateProfilePicture,
    reSize,
    makeid,
    removeEmojis,
    calculate_age,
  } = require('./lib/myfunc'),
  {
    addResponList,
    delResponList,
    isAlreadyResponList,
    isAlreadyResponListGroup,
    sendResponList,
    updateResponList,
    getDataResponList,
  } = require('./lib/data/respon-list'),
  {
    addResponGroup,
    checkResponGroup,
    changeResponGroup,
    deleteResponGroup,
    sendResponGroup,
    getResponGroup,
  } = require('./lib/data/respon-group'),
  {
    isSetProses,
    addSetProses,
    removeSetProses,
    changeSetProses,
    getTextSetProses,
  } = require('./lib/data/setproses'),
  {
    isSetDone,
    addSetDone,
    removeSetDone,
    changeSetDone,
    getTextSetDone,
  } = require('./lib/data/setdone'),
  {
    isSetOpen,
    addSetOpen,
    removeSetOpen,
    changeSetOpen,
    getTextSetOpen,
  } = require('./lib/data/setopen'),
  {
    isSetClose,
    addSetClose,
    removeSetClose,
    changeSetClose,
    getTextSetClose,
  } = require('./lib/data/setclose')
let daftar = JSON.parse(fs.readFileSync('./db/function/daftar.json')),
  commund = JSON.parse(fs.readFileSync('./database/dashboard/datacmd.json')),
  hitbot = JSON.parse(fs.readFileSync('./database/dashboard/userhit.json')),
  pendaftar = JSON.parse(fs.readFileSync('./database/user.json')),
  mess = JSON.parse(fs.readFileSync('./function/mess.json')),
  setting = JSON.parse(fs.readFileSync('./config.json')),
  antilink = JSON.parse(fs.readFileSync('./database/antilink.json')),
  antiwame = JSON.parse(fs.readFileSync('./database/antiwame.json')),
  listCmd = JSON.parse(fs.readFileSync('./database/listcmd.json')),
  _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json')),
  responDB = JSON.parse(fs.readFileSync('./database/respon.json')),
  db_respon_list = JSON.parse(fs.readFileSync('./database/list-message.json')),
  db_respon_group = JSON.parse(fs.readFileSync('./database/respon-group.json')),
  db_open_group = JSON.parse(fs.readFileSync('./database/set_open.json')),
  db_close_group = JSON.parse(fs.readFileSync('./database/set_close.json')),
  opengc = JSON.parse(fs.readFileSync('./database/opengc.json')),
  glimit = JSON.parse(fs.readFileSync('./database/glimit.json')),
  _money = JSON.parse(fs.readFileSync('./database/balance.json')),
  anonymous = JSON.parse(fs.readFileSync('./database/anonymous.json')),
  sewa = JSON.parse(fs.readFileSync('./database/sewa.json')),
  premium = JSON.parse(fs.readFileSync('./database/premium.json'))
moment.tz.setDefault('Asia/Jakarta').locale('id')
var packnamenya = 'ochoBOT',
  authornya = 'BY LEXXY',
  apiku = 'denaragimang'
module.exports = async (
  _0x3a28a5,
  _0x1b0526,
  _0x57d5fb,
  _0x52beea,
  _0x5b4a25,
  _0x16a9ea,
  _0xde8119,
  _0x1fd5f2,
  _0x5b0c1e,
  _0xeb8e3c,
  _0x21862d,
  _0x58fe33,
  _0x18390a,
  _0x49662b,
  _0x1e1847
) => {
  try {
    if (_0x1b0526[_0x1ca3ce(224)]) {
      return
    }
    if (_0x3a28a5[_0x1ca3ce(875)]) {
    } else {
      _0x3a28a5[_0x1ca3ce(1134)]
        ? (_0x1d56ef = '')
        : (_0x1d56ef = _0x3a28a5[_0x1ca3ce(252)])
    }
    _0x52bc97 != undefined ? _0x52bc97[_0x1ca3ce(383)](_0x41ab61) : []
    try {
      var _0x2da1b6 = await _0x3a28a5[_0x1ca3ce(768)](_0x228102, 'image')
    } catch {
      var _0x2da1b6 = _0x1ca3ce(461)
    }
    async function _0x51e6e4(_0x5bbd1f, _0x32ca80) {
      var _0x42a853 = _0x1ca3ce
      if (_0x5bbd1f === _0x42a853(702)) {
        var _0x191412 = await downloadContentFromMessage(
          _0x1b0526[_0x42a853(754)][_0x42a853(878)] ||
            _0x1b0526.message.extendedTextMessage?[_0x42a853(723)][
              _0x42a853(1521)
            ][_0x42a853(878)],
          'image'
        )
        let _0x2f0ef0 = Buffer[_0x42a853(371)]([])
        for await (const _0x47f3dd of _0x191412) {
          _0x2f0ef0 = Buffer[_0x42a853(1168)]([_0x2f0ef0, _0x47f3dd])
        }
        return fs.writeFileSync(_0x32ca80, _0x2f0ef0), _0x32ca80
      } else {
        if (_0x5bbd1f === 'video') {
          var _0x191412 = await downloadContentFromMessage(
            _0x1b0526[_0x42a853(754)][_0x42a853(1414)] ||
              _0x1b0526.message[_0x42a853(471)]?[_0x42a853(723)][
                _0x42a853(1521)
              ][_0x42a853(1414)],
            _0x42a853(434)
          )
          let _0x35341c = Buffer[_0x42a853(371)]([])
          for await (const _0x5d6732 of _0x191412) {
            _0x35341c = Buffer[_0x42a853(1168)]([_0x35341c, _0x5d6732])
          }
          return fs.writeFileSync(_0x32ca80, _0x35341c), _0x32ca80
        } else {
          if (_0x5bbd1f === _0x42a853(287)) {
            var _0x191412 = await downloadContentFromMessage(
              _0x1b0526[_0x42a853(754)].stickerMessage ||
                _0x1b0526[_0x42a853(754)][_0x42a853(471)]?[_0x42a853(723)][
                  _0x42a853(1521)
                ].stickerMessage,
              _0x42a853(287)
            )
            let _0x3ff470 = Buffer[_0x42a853(371)]([])
            for await (const _0x4008d7 of _0x191412) {
              _0x3ff470 = Buffer[_0x42a853(1168)]([_0x3ff470, _0x4008d7])
            }
            return fs.writeFileSync(_0x32ca80, _0x3ff470), _0x32ca80
          } else {
            if (_0x5bbd1f === _0x42a853(1096)) {
              var _0x191412 = await downloadContentFromMessage(
                _0x1b0526[_0x42a853(754)][_0x42a853(933)] ||
                  _0x1b0526.message.extendedTextMessage?[_0x42a853(723)][
                    _0x42a853(1521)
                  ][_0x42a853(933)],
                'audio'
              )
              let _0xb4e740 = Buffer.from([])
              for await (const _0x3d695c of _0x191412) {
                _0xb4e740 = Buffer[_0x42a853(1168)]([_0xb4e740, _0x3d695c])
              }
              return fs.writeFileSync(_0x32ca80, _0xb4e740), _0x32ca80
            }
          }
        }
      }
    }
    function _0x33dee6(_0x4e9698) {
      var _0x11a136 = _0x1ca3ce
      _0x4e9698 = _0x4e9698[_0x11a136(1446)]()
      while (/(-?\d+)(\d{3})/.test(_0x4e9698)) {
        _0x4e9698 = _0x4e9698[_0x11a136(1201)](/(-?\d+)(\d{3})/, _0x11a136(752))
      }
      return _0x4e9698
    }
    async function _0x2efa6d(_0x4e993e, _0x1ab4b0) {
      var _0x3fc08a = _0x1ca3ce,
        _0x38d565 = await _0x46466e(_0x1ab4b0)
      _0x38d565 = _0x38d565[_0x3fc08a(330)][0][_0x3fc08a(667)]
      hx.youtube(_0x38d565)
        [_0x3fc08a(1298)](async (_0x4b61c6) => {
          var _0x4d2edb = _0x3fc08a,
            _0x37cb84 = [
              {
                urlButton: {
                  displayText: 'Source Code',
                  url: '' + _0x38d565,
                },
              },
              {
                quickReplyButton: {
                  displayText: _0x4d2edb(1492),
                  id: _0x1d56ef + 'ytmp3 ' + _0x38d565,
                },
              },
              {
                quickReplyButton: {
                  displayText: 'Video',
                  id: _0x1d56ef + _0x4d2edb(966) + _0x38d565,
                },
              },
            ]
          _0x3a28a5[_0x4d2edb(557)](_0x4e993e, {
            caption:
              _0x4d2edb(1515) +
              (_0x4b61c6[_0x4d2edb(395)] ? _0x4b61c6.title : '-') +
              '\n\u2752 *Quality :* ' +
              _0x4b61c6[_0x4d2edb(935)] +
              _0x4d2edb(1203),
            image: { url: _0x4b61c6[_0x4d2edb(859)] },
            templateButtons: _0x37cb84,
            footer: _0x4d2edb(595),
            mentions: [_0x228102],
          })
        })
        [_0x3fc08a(233)]((_0x7f0dfd) => {
          var _0x927ee6 = _0x3fc08a
          _0x3a28a5[_0x927ee6(557)](
            _0x4e993e,
            { text: mess[_0x927ee6(1181)][_0x927ee6(1175)] },
            { quoted: _0x1b0526 }
          )
          _0x2ba8f7[_0x927ee6(1006)]((_0x396d73) =>
            _0x3a28a5[_0x927ee6(557)](_0x4e993e, {
              text: _0x927ee6(1041) + _0x7f0dfd,
            })
          )
        })
    }
    function _0x423e7b(_0x147ce9, _0x52bccc) {
      var _0x53b213 = _0x1ca3ce
      let _0x1a4ce5 = new Date(_0x147ce9 + ' ' + _0x52bccc + ', 2022 00:00:00')[
          _0x53b213(774)
        ](),
        _0x21e273 = Date[_0x53b213(1035)](),
        _0x12239f = _0x1a4ce5 - _0x21e273,
        _0x51a1e4 = Math.floor(_0x12239f / 86400000),
        _0xbc8bb9 = Math[_0x53b213(230)]((_0x12239f % 86400000) / 3600000),
        _0x137dea = Math[_0x53b213(230)]((_0x12239f % 3600000) / 60000),
        _0x142eda = Math[_0x53b213(230)]((_0x12239f % 60000) / 1000)
      return (
        _0x51a1e4 +
        _0x53b213(511) +
        _0xbc8bb9 +
        _0x53b213(239) +
        _0x137dea +
        _0x53b213(860) +
        _0x142eda +
        _0x53b213(829)
      )
    }
    function _0x193f47(_0x13e367) {
      var _0xd1e5df = _0x1ca3ce
      return JSON[_0xd1e5df(1307)](_0x13e367, null, 2)
    }
    function _0x24a85e(_0x39705a) {
      var _0x59c4ec = _0x1ca3ce
      return _0x59c4ec(1452) + _0x39705a + '```'
    }
    function _0x1392f9(_0x208ec6, _0x4ce4f0 = null) {
      var _0x1576f0 = _0x1ca3ce
      return _0x4ce4f0 !== null
        ? ((_0x208ec6 = Math[_0x1576f0(635)](_0x208ec6)),
          (_0x4ce4f0 = Math[_0x1576f0(230)](_0x4ce4f0)),
          Math.floor(Math[_0x1576f0(551)]() * (_0x4ce4f0 - _0x208ec6 + 1)) +
            _0x208ec6)
        : Math[_0x1576f0(230)](Math[_0x1576f0(551)]() * _0x208ec6) + 1
    }
    function _0x4b9e39(_0xf1f632, _0x20069e = [], _0xd16a34) {
      var _0x154a0a = _0x1ca3ce
      if (_0xd16a34 == null || _0xd16a34 == undefined || _0xd16a34 == false) {
        let _0x504d0c = _0x3a28a5[_0x154a0a(557)](_0x43727e, {
          text: _0xf1f632,
          mentions: _0x20069e,
        })
        return _0x504d0c
      } else {
        let _0x5aa035 = _0x3a28a5[_0x154a0a(557)](
          _0x43727e,
          {
            text: _0xf1f632,
            mentions: _0x20069e,
          },
          { quoted: _0x1b0526 }
        )
        return _0x5aa035
      }
    }
    function _0x24e16c(_0x592353 = '') {
      var _0xb8759e = _0x1ca3ce
      return [..._0x592353[_0xb8759e(648)](/@([0-9]{5,16}|0)/g)][
        _0xb8759e(1006)
      ]((_0x281cf0) => _0x281cf0[1] + _0xb8759e(917))
    }
    async function _0x5e067c(_0x452cd6) {
      var _0x402a07 = _0x1ca3ce
      try {
        let _0x1f5a9a = await _0x3a28a5.groupMetadata(_0x452cd6)
        return _0x1f5a9a[_0x402a07(1283)]
      } catch (_0x123a90) {
        return '-'
      }
    }
    async function _0x2b8f5a(
      _0x57700a,
      _0x7d3227,
      _0x435ed7 = _0x44aa17[_0x1ca3ce(1163)],
      _0x4f7453 = _0x44aa17[_0x1ca3ce(417)],
      _0x23b28d = {}
    ) {
      var _0x5c58ec = _0x1ca3ce,
        _0x4b3b06 = Date[_0x5c58ec(1035)]() / 10000,
        _0x12ce31 = function (_0x12d208, _0x3a76b5, _0x2b8283) {
          var _0x4952ae = _0x5c58ec
          request[_0x4952ae(640)](
            _0x12d208,
            function (_0x1c7538, _0xc5f025, _0x5b3c7b) {
              var _0x15833f = _0x4952ae
              request(_0x12d208)
                [_0x15833f(690)](fs[_0x15833f(1499)](_0x3a76b5))
                .on(_0x15833f(334), _0x2b8283)
            }
          )
        }
      exif.create(_0x435ed7, _0x4f7453, 'sendstc_' + _0x4b3b06)
      _0x12ce31(
        _0x7d3227,
        _0x5c58ec(832) + _0x4b3b06 + _0x5c58ec(983),
        async function () {
          var _0xe0d65d = _0x5c58ec
          let _0x33de06 = _0xe0d65d(832) + _0x4b3b06 + '.png',
            _0x50e278 = _0xe0d65d(832) + _0x4b3b06 + _0xe0d65d(1185)
          exec(
            _0xe0d65d(474) + _0x33de06 + _0xe0d65d(795) + _0x50e278,
            async (_0x5af764) => {
              var _0x240446 = _0xe0d65d
              exec(
                'webpmux -set exif ./sticker/sendstc_' +
                  _0x4b3b06 +
                  _0x240446(337) +
                  _0x50e278 +
                  ' -o ' +
                  _0x50e278,
                async (_0x3107a9) => {
                  var _0x2d5436 = _0x240446
                  _0x3a28a5[_0x2d5436(557)](
                    _0x57700a,
                    { sticker: fs[_0x2d5436(957)](_0x50e278) },
                    _0x23b28d
                  )
                  fs[_0x2d5436(681)](_0x33de06)
                  fs[_0x2d5436(681)](_0x50e278)
                }
              )
            }
          )
        }
      )
    }
    function _0x1047d3(_0xa271a6) {
      var _0x3fc404 = _0x1ca3ce,
        _0x3fffcd = '',
        _0x5dfe1f = _0xa271a6
          .toString()
          [_0x3fc404(760)]('')
          [_0x3fc404(302)]()
          [_0x3fc404(1034)]('')
      for (
        var _0x3c1f02 = 0;
        _0x3c1f02 < _0x5dfe1f[_0x3fc404(676)];
        _0x3c1f02++
      ) {
        if (_0x3c1f02 % 3 == 0) {
          _0x3fffcd += _0x5dfe1f[_0x3fc404(1243)](_0x3c1f02, 3) + '.'
        }
      }
      return (
        '' +
        _0x3fffcd
          .split('', _0x3fffcd[_0x3fc404(676)] - 1)
          .reverse()
          .join('')
      )
    }
    if (_0x25e638 && _0x21591f && !_0x2e401c && !_0x182037 && _0x20ae58) {
      if (_0x4b00f9[_0x1ca3ce(1303)](/(https:\/\/)/gi)) {
        if (!_0x20ae58) {
          return _0x358c06('Untung bot bukan admin')
        }
        _0x358c06(_0x1ca3ce(543))
        _0x3a28a5[_0x1ca3ce(1002)](_0x43727e, [_0x228102], 'remove')
      }
    }
    if (_0x25e638 && _0x394c62 && !_0x2e401c && !_0x182037 && _0x20ae58) {
      if (_0x4b00f9[_0x1ca3ce(1303)](/(wa.me)/gi)) {
        if (!_0x20ae58) {
          return _0x358c06('Untung bot bukan admin')
        }
        _0x358c06(_0x1ca3ce(777))
        _0x3a28a5[_0x1ca3ce(1002)](_0x43727e, [_0x228102], 'remove')
      }
    }
    async function _0x7189f5(_0x146fa6, _0x411423, _0x5a2afc) {
      var _0x1cfaef = _0x1ca3ce,
        _0x3ccb1b = null,
        _0xf9b217 = null
      Object[_0x1cfaef(1214)](_0x5a2afc)[_0x1cfaef(391)]((_0x5ec928) => {
        var _0x5e066f = _0x1cfaef
        _0x5a2afc[_0x5ec928][_0x5e066f(1251)] === _0x411423 &&
          (_0x3ccb1b = _0x5ec928)
      })
      _0x3ccb1b === null &&
        (_0x5a2afc[_0x1cfaef(383)]({
          jid: _0x411423,
          db: [
            {
              nama: _0x146fa6,
              count: 0,
            },
          ],
        }),
        fs[_0x1cfaef(1512)](
          _0x1cfaef(558),
          JSON[_0x1cfaef(1307)](_0x5a2afc, null, 2)
        ),
        Object[_0x1cfaef(1214)](_0x5a2afc).forEach((_0x3d07e3) => {
          _0x5a2afc[_0x3d07e3].jid === _0x411423 && (_0x3ccb1b = _0x3d07e3)
        }))
      _0x3ccb1b !== null &&
        (Object[_0x1cfaef(1214)](_0x5a2afc[_0x3ccb1b].db)[_0x1cfaef(391)](
          (_0x2cbe7f) => {
            var _0x4c79ed = _0x1cfaef
            _0x5a2afc[_0x3ccb1b].db[_0x2cbe7f][_0x4c79ed(1106)] === _0x146fa6 &&
              (_0xf9b217 = _0x2cbe7f)
          }
        ),
        _0xf9b217 === null
          ? (_0x5a2afc[_0x3ccb1b].db.push({
              nama: _0x146fa6,
              count: 1,
            }),
            fs[_0x1cfaef(1512)](
              _0x1cfaef(558),
              JSON[_0x1cfaef(1307)](_0x5a2afc, null, 2)
            ))
          : ((_0x5a2afc[_0x3ccb1b].db[_0xf9b217][_0x1cfaef(821)] += 1),
            fs[_0x1cfaef(1512)](
              _0x1cfaef(558),
              JSON[_0x1cfaef(1307)](_0x5a2afc, null, 2)
            )))
    }
    async function _0x283189(_0x33ba7e, _0x5a3daa) {
      var _0x2d8788 = _0x1ca3ce,
        _0x4d3f13 = null
      return (
        Object.keys(_0x5a3daa)[_0x2d8788(391)]((_0x1a69b3) => {
          var _0x35a02e = _0x2d8788
          _0x5a3daa[_0x1a69b3][_0x35a02e(1251)] === _0x33ba7e &&
            (_0x4d3f13 = _0x1a69b3)
        }),
        _0x4d3f13
      )
    }
    async function _0x50def3(_0x3da7cc, _0x124e29, _0x4fe59a) {
      var _0x415f54 = _0x1ca3ce
      _0x7189f5(_0x3da7cc, _0x124e29, _cmdUser)
      var _0x45e13f = null
      Object[_0x415f54(1214)](_0x4fe59a)[_0x415f54(391)]((_0x501e6c) => {
        var _0x122835 = _0x415f54
        _0x4fe59a[_0x501e6c][_0x122835(1106)] === _0x3da7cc &&
          (_0x45e13f = _0x501e6c)
      })
      _0x45e13f === null
        ? (_0x4fe59a[_0x415f54(383)]({
            nama: _0x3da7cc,
            count: 1,
          }),
          fs.writeFileSync(
            _0x415f54(315),
            JSON[_0x415f54(1307)](_0x4fe59a, null, 2)
          ))
        : ((_0x4fe59a[_0x45e13f][_0x415f54(821)] += 1),
          fs.writeFileSync(
            _0x415f54(315),
            JSON[_0x415f54(1307)](_0x4fe59a, null, 2)
          ))
    }
    !_0x41f9ac &&
      checkResponGroup(_0x43727e, _0x4b00f9, db_respon_group) &&
      _0x3a28a5[_0x1ca3ce(557)](
        _0x43727e,
        { text: sendResponGroup(_0x43727e, _0x4b00f9, db_respon_group) },
        { quoted: _0x1b0526 }
      )
    setInterval(async () => {
      var _0x457ad3 = _0x1ca3ce
      fs[_0x457ad3(1512)](
        './database/anonymous.json',
        JSON.stringify(anonymous, null, 2)
      )
    }, 30000)
    if (
      !_0x25e638 &&
      !_0x1b0526[_0x1ca3ce(503)][_0x1ca3ce(1364)] &&
      !_0x1f5a79
    ) {
      if (_0x47f3b9) {
        var _0x2ac065 = [_0x47f3b9.a, _0x47f3b9.b][_0x1ca3ce(1445)](
          (_0x31d71e) => _0x31d71e !== _0x228102
        )
        if (_0x1b0526.type == _0x1ca3ce(982)) {
          _0x3a28a5[_0x1ca3ce(557)](_0x2ac065, { text: _0x4b00f9 })
        } else {
          if (_0x1b0526[_0x1ca3ce(1156)] == _0x1ca3ce(471)) {
            _0x3a28a5[_0x1ca3ce(557)](_0x2ac065, {
              text: _0x4b00f9,
              contextInfo:
                _0x1b0526[_0x1ca3ce(754)][_0x1ca3ce(471)][_0x1ca3ce(723)],
            })
          } else {
            _0x3a28a5[_0x1ca3ce(268)](_0x2ac065, _0x1b0526[_0x1ca3ce(754)], {
              contextInfo: _0x1dde0a,
            })
          }
        }
      }
    }
    if (
      !_0x41f9ac &&
      _0x25e638 &&
      isAlreadyResponList(_0x43727e, _0x4b00f9, _0xeb8e3c)
    ) {
      _0x27e1d7[_0x1ca3ce(1357)] === false
        ? _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            { text: sendResponList(_0x43727e, _0x4b00f9, _0xeb8e3c) },
            { quoted: _0x1b0526 }
          )
        : _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: await getBuffer(_0x27e1d7[_0x1ca3ce(388)]),
              caption: _0x27e1d7[_0x1ca3ce(1066)],
            },
            { quoted: _0x1b0526 }
          )
    }
    function _0x325ec9(_0x2b0eb7 = '', _0x5c8d80) {
      return [_0x5c8d80.a, _0x5c8d80.b].includes(_0x2b0eb7)
    }
    function _0x36944c(_0x504a72 = '', _0x594740) {
      return _0x504a72 == _0x594740.a
        ? _0x594740.b
        : _0x504a72 == _0x594740.b
        ? _0x594740.a
        : ''
    }
    _0x41f9ac &&
      !_0x26ccbf &&
      (pendaftar[_0x1ca3ce(383)](_0x228102),
      fs.writeFileSync(
        _0x1ca3ce(578),
        JSON[_0x1ca3ce(1307)](pendaftar, null, 2)
      ))
    _prem[_0x1ca3ce(718)](_0x3a28a5, premium)
    _sewa[_0x1ca3ce(718)](_0x3a28a5, sewa)
    _0x41f9ac &&
      (addBalance(_0x228102, _0x1392f9(5, 30), _money),
      fs[_0x1ca3ce(1512)](
        _0x1ca3ce(333),
        JSON[_0x1ca3ce(1307)](_money, null, 2)
      ))
    cekWaktuGame(_0x3a28a5, caklontong)
    if (isPlayGame(_0x43727e, caklontong) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, caklontong)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            _0x1ca3ce(810) +
            getJawabanGame(_0x43727e, tebakgame) +
            _0x1ca3ce(1075) +
            _0x1a99eb +
            _0x1ca3ce(988),
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(295),
              buttonText: { displayText: _0x1ca3ce(689) },
              type: 1,
            },
          ]
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea.footer,
          buttons: _0xb99c64,
        })
        caklontong[_0x1ca3ce(953)](getGamePosi(_0x43727e, caklontong), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, susunkata)
    if (isPlayGame(_0x43727e, susunkata) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, susunkata)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            _0x1ca3ce(810) +
            getJawabanGame(_0x43727e, tebakgame) +
            _0x1ca3ce(1075) +
            _0x1a99eb +
            '\n\nIngin bermain lagi? klik button  next',
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(704),
              buttonText: { displayText: _0x1ca3ce(689) },
              type: 1,
            },
          ]
        _0x3a28a5.sendMessage(_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea[_0x1ca3ce(1146)],
          buttons: _0xb99c64,
        })
        susunkata.splice(getGamePosi(_0x43727e, susunkata), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, siapakahaku)
    if (isPlayGame(_0x43727e, siapakahaku) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, siapakahaku)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            _0x1ca3ce(810) +
            getJawabanGame(_0x43727e, tebakgame) +
            _0x1ca3ce(1075) +
            _0x1a99eb +
            _0x1ca3ce(988),
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(1127),
              buttonText: { displayText: _0x1ca3ce(689) },
              type: 1,
            },
          ]
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea[_0x1ca3ce(1146)],
          buttons: _0xb99c64,
        })
        siapakahaku[_0x1ca3ce(953)](getGamePosi(_0x43727e, siapakahaku), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, tebakkalimat)
    if (isPlayGame(_0x43727e, tebakkalimat) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, tebakkalimat)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            '*Selamat Jawaban Kamu Benar \uD83C\uDF89*\n\nJawaban : ' +
            getJawabanGame(_0x43727e, tebakgame) +
            '\nHadiah : Balance $' +
            _0x1a99eb +
            _0x1ca3ce(988),
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(257),
              buttonText: { displayText: _0x1ca3ce(689) },
              type: 1,
            },
          ]
        _0x3a28a5.sendMessage(_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea.footer,
          buttons: _0xb99c64,
        })
        tebakkalimat.splice(getGamePosi(_0x43727e, siapakahaku), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, tebakkata)
    if (isPlayGame(_0x43727e, tebakkata) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, tebakkata)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            _0x1ca3ce(810) +
            getJawabanGame(_0x43727e, tebakgame) +
            _0x1ca3ce(1075) +
            _0x1a99eb +
            _0x1ca3ce(988),
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(1061),
              buttonText: { displayText: _0x1ca3ce(689) },
              type: 1,
            },
          ]
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea.footer,
          buttons: _0xb99c64,
        })
        tebakkata[_0x1ca3ce(953)](getGamePosi(_0x43727e, tebakkata), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, tebakkimia)
    if (isPlayGame(_0x43727e, tebakkimia) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, tebakkimia)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            _0x1ca3ce(810) +
            getJawabanGame(_0x43727e, tebakgame) +
            _0x1ca3ce(1075) +
            _0x1a99eb +
            _0x1ca3ce(988),
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + 'tebakkimia',
              buttonText: { displayText: _0x1ca3ce(689) },
              type: 1,
            },
          ]
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea.footer,
          buttons: _0xb99c64,
        })
        tebakkimia[_0x1ca3ce(953)](getGamePosi(_0x43727e, tebakkimia), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, tebaktebakan)
    if (isPlayGame(_0x43727e, tebaktebakan) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, tebaktebakan)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            _0x1ca3ce(810) +
            getJawabanGame(_0x43727e, tebakgame) +
            '\nHadiah : Balance $' +
            _0x1a99eb +
            _0x1ca3ce(988),
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(1077),
              buttonText: { displayText: 'Next\uD83C\uDFAE' },
              type: 1,
            },
          ]
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea[_0x1ca3ce(1146)],
          buttons: _0xb99c64,
        })
        tebaktebakan[_0x1ca3ce(953)](getGamePosi(_0x43727e, tebaktebakan), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, tekateki)
    if (isPlayGame(_0x43727e, tekateki) && _0x26ccbf) {
      if (_0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, tekateki)) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            '*Selamat Jawaban Kamu Benar \uD83C\uDF89*\n\nJawaban : ' +
            getJawabanGame(_0x43727e, tebakgame) +
            _0x1ca3ce(1075) +
            _0x1a99eb +
            '\n\nIngin bermain lagi? klik button  next',
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + 'tekateki',
              buttonText: { displayText: _0x1ca3ce(689) },
              type: 1,
            },
          ]
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea[_0x1ca3ce(1146)],
          buttons: _0xb99c64,
        })
        tekateki[_0x1ca3ce(953)](getGamePosi(_0x43727e, tekateki), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, tebakgambar)
    if (isPlayGame(_0x43727e, tebakgambar) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, tebakgambar)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            _0x1ca3ce(810) +
            getJawabanGame(_0x43727e, tebakgame) +
            _0x1ca3ce(1075) +
            _0x1a99eb +
            _0x1ca3ce(988),
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(449),
              buttonText: { displayText: 'Next \uD83C\uDFAE' },
              type: 1,
            },
          ]
        _0x3a28a5.sendMessage(_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea.footer,
          buttons: _0xb99c64,
        })
        tebakgambar[_0x1ca3ce(953)](getGamePosi(_0x43727e, tebakgambar), 1)
      }
    }
    cekWaktuGame(_0x3a28a5, tebakgame)
    if (isPlayGame(_0x43727e, tebakgame) && _0x26ccbf) {
      if (
        _0x4b00f9[_0x1ca3ce(1231)]() == getJawabanGame(_0x43727e, tebakgame)
      ) {
        var _0x1a99eb = _0x1392f9(100, 150)
        addBalance(_0x228102, _0x1a99eb, _money)
        var _0x54f673 =
            _0x1ca3ce(810) +
            getJawabanGame(_0x43727e, tebakgame) +
            _0x1ca3ce(1075) +
            _0x1a99eb +
            _0x1ca3ce(988),
          _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(354),
              buttonText: { displayText: _0x1ca3ce(689) },
              type: 1,
            },
          ]
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea[_0x1ca3ce(1146)],
          buttons: _0xb99c64,
        })
        tebakgame[_0x1ca3ce(953)](getGamePosi(_0x43727e, tebakgame), 1)
      }
    }
    if (_0x228102.startsWith(_0x1ca3ce(466))) {
      return _0x3a28a5[_0x1ca3ce(1012)](_0x228102, 'block')
    }
    if (_0x228102[_0x1ca3ce(851)]('91')) {
      return _0x3a28a5.updateBlockStatus(_0x228102, _0x1ca3ce(577))
    }
    if (_0x228102[_0x1ca3ce(851)]('92')) {
      return _0x3a28a5[_0x1ca3ce(1012)](_0x228102, _0x1ca3ce(577))
    }
    if (_0x228102[_0x1ca3ce(851)]('90')) {
      return _0x3a28a5[_0x1ca3ce(1012)](_0x228102, _0x1ca3ce(577))
    }
    if (_0x228102.startsWith('54')) {
      return _0x3a28a5.updateBlockStatus(_0x228102, _0x1ca3ce(577))
    }
    if (_0x228102[_0x1ca3ce(851)]('55')) {
      return _0x3a28a5[_0x1ca3ce(1012)](_0x228102, _0x1ca3ce(577))
    }
    if (_0x228102[_0x1ca3ce(851)]('40')) {
      return _0x3a28a5[_0x1ca3ce(1012)](_0x228102, _0x1ca3ce(577))
    }
    if (_0x228102[_0x1ca3ce(851)]('94')) {
      return _0x3a28a5[_0x1ca3ce(1012)](_0x228102, _0x1ca3ce(577))
    }
    if (_0x228102[_0x1ca3ce(851)]('60')) {
      return _0x3a28a5[_0x1ca3ce(1012)](_0x228102, _0x1ca3ce(577))
    }
    if (_0x4b00f9[_0x1ca3ce(851)]('> ') && _0x2e401c) {
      console.log(
        color(_0x1ca3ce(1110)),
        color(
          moment(_0x1b0526.messageTimestamp * 1000)[_0x1ca3ce(891)](
            _0x1ca3ce(312)
          ),
          _0x1ca3ce(1056)
        ),
        color('Dari Owner aowkoakwoak')
      )
      try {
        _0x51107c(
          util[_0x1ca3ce(891)](
            eval(
              ';(async () => { ' + _0x4b00f9[_0x1ca3ce(284)](2) + _0x1ca3ce(489)
            )
          )
        )
      } catch (_0x3c05c0) {
        _0x51107c(util[_0x1ca3ce(891)](_0x3c05c0))
      }
    } else {
      if (_0x4b00f9[_0x1ca3ce(851)]('$ ') && _0x2e401c) {
        console[_0x1ca3ce(1200)](
          color(_0x1ca3ce(368)),
          color(
            moment(_0x1b0526.messageTimestamp * 1000).format(
              'DD/MM/YY HH:mm:ss'
            ),
            'yellow'
          ),
          color(_0x1ca3ce(749))
        )
        exec(_0x4b00f9[_0x1ca3ce(284)](2), (_0x363605, _0xa936d2) => {
          if (_0x363605) {
            return _0x358c06('' + _0x363605)
          }
          if (_0xa936d2) {
            _0x358c06('' + _0xa936d2)
          }
        })
      } else {
        if (_0x4b00f9[_0x1ca3ce(851)]('x ') && _0x2e401c) {
          console[_0x1ca3ce(1200)](
            color(_0x1ca3ce(1110)),
            color(
              moment(_0x1b0526.messageTimestamp * 1000)[_0x1ca3ce(891)](
                'DD/MM/YY HH:mm:ss'
              ),
              _0x1ca3ce(1056)
            ),
            color('Dari Owner aowkaokwoak')
          )
          try {
            if (typeof _0x38b815 !== _0x1ca3ce(866)) {
              _0x38b815 = require(_0x1ca3ce(498))[_0x1ca3ce(406)](_0x38b815)
            }
            _0x358c06('' + _0x38b815)
          } catch (_0x2486a5) {
            _0x358c06('' + _0x2486a5)
          }
        }
      }
    }
    !_0x25e638 &&
      _0x41f9ac &&
      !_0x1423f9 &&
      console[_0x1ca3ce(1200)](
        color(_0x1ca3ce(1197)),
        color(
          moment(_0x1b0526[_0x1ca3ce(827)] * 1000)[_0x1ca3ce(891)](
            _0x1ca3ce(335)
          ),
          _0x1ca3ce(1056)
        ),
        color(_0x203d41 + ' [' + _0x430466.length + ']'),
        'from',
        color(_0x4b673f)
      )
    _0x25e638 &&
      _0x41f9ac &&
      !_0x1423f9 &&
      console[_0x1ca3ce(1200)](
        color('[ CMD ]'),
        color(
          moment(_0x1b0526[_0x1ca3ce(827)] * 1000)[_0x1ca3ce(891)](
            _0x1ca3ce(335)
          ),
          _0x1ca3ce(1056)
        ),
        color(_0x203d41 + ' [' + _0x430466[_0x1ca3ce(676)] + ']'),
        _0x1ca3ce(371),
        color(_0x4b673f),
        'in',
        color(_0x10f30)
      )
    switch (_0x203d41) {
      case _0x1d56ef + 'infogc':
      case _0x1d56ef + _0x1ca3ce(1282):
      case _0x1d56ef + 'infogroup':
        _0x358c06(_0x2384aa),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'limit':
        {
          _0x358c06(
            '*INFO-USER*\n Tag : @' +
              _0x228102[_0x1ca3ce(760)]('@')[0] +
              _0x1ca3ce(421) +
              (_0x2e401c ? _0x1ca3ce(1352) : 'User') +
              _0x1ca3ce(824) +
              getBalance(_0x228102, _money) +
              _0x1ca3ce(805) +
              cekGLimit(_0x228102, _0x4cec54, glimit)
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(226):
        {
          if (!_0x2e401c && !_0x1423f9) {
            return _0x358c06(mess.OnlyOwner)
          }
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(652))
          }
          var _0x116859 = _0x44ac49
          await _0x3a28a5[_0x1ca3ce(1012)](
            _0x116859 + _0x1ca3ce(917),
            _0x1ca3ce(226)
          )
          _0x358c06(_0x1ca3ce(726))
        }
        break
      case _0x1d56ef + _0x1ca3ce(577):
        {
          if (!_0x2e401c && !_0x1423f9) {
            return _0x358c06(mess.OnlyOwner)
          }
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(652))
          }
          var _0x116859 = _0x44ac49
          await _0x3a28a5[_0x1ca3ce(1012)](
            _0x116859 + '@s.whatsapp.net',
            _0x1ca3ce(577)
          )
          _0x358c06('Sukses Block Nomor')
        }
        break
      case _0x1d56ef + _0x1ca3ce(675):
        {
          _0x358c06(_0x1c71fa)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1148):
      case _0x1d56ef + 'buylimit':
        {
          if (_0x430466[_0x1ca3ce(676)] < 2) {
            return _0x358c06(
              _0x1ca3ce(834) +
                _0x1d56ef +
                'buyglimit* jumlah game limit yang ingin dibeli\n\nHarga 1 game limit = $150 balance\nPajak $1 / $10'
            )
          }
          if (_0x430466[1][_0x1ca3ce(1111)]('-')) {
            return _0x358c06(_0x1ca3ce(402))
          }
          if (_0x430466[1][_0x1ca3ce(1231)]() === _0x1ca3ce(1420)) {
            return _0x358c06(_0x1ca3ce(991))
          }
          if (getBalance(_0x228102, _money) < _0x2c462b) {
            return _0x358c06(_0x1ca3ce(691))
          }
          kurangBalance(_0x228102, _0x2c462b, _money)
          givegame(_0x228102, parseInt(_0x430466[1]), glimit)
          _0x358c06(
            _0x24a85e(
              _0x1ca3ce(1232) +
                _0x430466[1] +
                _0x1ca3ce(1031) +
                getBalance(_0x228102, _money) +
                '\nSisa Game Limit : ' +
                cekGLimit(_0x228102, _0x4cec54, glimit) +
                '/' +
                _0x4cec54
            )
          )
        }
        break
      case _0x1d56ef + 'getpp':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x2da1b6 },
              caption:
                _0x1ca3ce(1137) + _0x228102[_0x1ca3ce(760)]('@')[0] + '*',
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1132):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(483))
          }
          _0x358c06('*Searching Username ml \uD83D\uDD0E*\n' + _0x44ac49)
          hikki.game
            .nickNameMobileLegends(_0x288988, _0x5a096f)
            [_0x1ca3ce(1298)]((_0x450314) => {
              var _0x3b1753 = _0x1ca3ce
              console[_0x3b1753(1200)](_0x450314)
              _0x358c06(_0x3b1753(699) + _0x450314.userName)
            })
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'nickff':
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(1409))
          }
          _0x358c06('*Searching Username ff \uD83D\uDD0E*\n' + _0x44ac49)
          hikki.game[_0x1ca3ce(573)](_0x44ac49)[_0x1ca3ce(1298)](
            (_0x5ee516) => {
              var _0x1a98a5 = _0x1ca3ce
              console[_0x1a98a5(1200)](_0x5ee516)
              _0x358c06(_0x1a98a5(1164) + _0x5ee516[_0x1a98a5(1080)])
            }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1ca3ce(1236):
        {
          if (!_0x44ac49) {
            return _0x358c06('Contoh :\n' + _0x203d41 + _0x1ca3ce(1459))
          }
          _0x358c06(_0x1ca3ce(736) + _0x44ac49)
          hikki[_0x1ca3ce(1379)]
            .superSusChecker(_0x44ac49)
            .then((_0x593c44) => {
              var _0x38a350 = _0x1ca3ce
              console.log(_0x593c44)
              _0x358c06(
                _0x38a350(947) + _0x593c44.id + _0x38a350(762) + _0x593c44.name
              )
            })
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(324):
        _0x3a28a5.sendMessage(_0x43727e, {
          text: _0x1ca3ce(377) + pendaftar[_0x1ca3ce(676)],
          quoted: _0x1b0526,
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(452):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(1315))
          }
          var _0x417981 = _0xb6e1d1[_0x1ca3ce(284)](10)
          for (let _0x22aab5 of _0x2b6f49[_0x1ca3ce(1304)]) {
            let _0x1717e6 = await _0x3a28a5[_0x1ca3ce(1217)](
              _0x43727e,
              _0x22aab5.url,
              _0x1b0526,
              {
                packname: packnamenya,
                author: authornya,
                categories: _0x22aab5[_0x1ca3ce(1507)],
              }
            )
            await fs.unlinkSync(_0x1717e6)
          }
        }
        break
      case _0x1d56ef + 'attp':
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(1169))
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          await fs[_0x1ca3ce(681)](_0x45a25e)
        }
        break
      case _0x1d56ef + _0x1ca3ce(576):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(1169))
          }
          await fs[_0x1ca3ce(681)](_0xa37ed3)
        }
        break
      case _0x1d56ef + _0x1ca3ce(999):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(398))
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x468286 = _0x44ac49,
            _0x251d72 = await fetchJson(_0x1ca3ce(906) + _0x468286)
          _0x358c06(_0x387a2a)
        }
        break
      case _0x1d56ef + _0x1ca3ce(1086):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(398))
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x468286 = _0x44ac49,
            _0x2937bb = await fetchJson(
              'https://api-yogipw.herokuapp.com/api/base?type=base32&encode=' +
                _0x468286
            ),
            _0x251d72 = _0x2937bb[_0x1ca3ce(600)]
          _0x358c06(_0x3f9cd0)
        }
        break
      case _0x1d56ef + _0x1ca3ce(223):
        {
          if (!_0x44ac49) {
            return _0x358c06('Example :\n' + _0x203d41 + _0x1ca3ce(398))
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x5c489f = _0x44ac49,
            _0x2937bb = await fetchJson(
              'https://api-yogipw.herokuapp.com/api/base?type=base64&decode=' +
                _0x5c489f
            ),
            _0x251d72 = _0x2937bb[_0x1ca3ce(600)]
          _0x358c06(_0x2d3989)
        }
        break
      case _0x1d56ef + _0x1ca3ce(889):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + ' Lexxy-Api')
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x5c489f = _0x44ac49,
            _0x2937bb = await fetchJson(_0x1ca3ce(857) + _0x5c489f),
            _0x251d72 = _0x2937bb[_0x1ca3ce(600)]
          _0x358c06(_0xe497f5)
        }
        break
      case _0x1d56ef + _0x1ca3ce(1229):
        if (_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1149)])
        }
        var _0xb99c64 = [
            {
              buttonId: _0x1d56ef + 'start',
              buttonText: { displayText: _0x1ca3ce(722) },
              type: 1,
            },
          ],
          _0x54f673 =
            _0x1ca3ce(727) +
            (_0x4b673f !== undefined ? _0x4b673f : _0x1ca3ce(572)) +
            _0x1ca3ce(1128) +
            _0x1d56ef +
            _0x1ca3ce(1170)
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          text: _0x54f673,
          footer: _0x52beea[_0x1ca3ce(1146)],
          buttons: _0xb99c64,
        })
        break
      case _0x1d56ef + _0x1ca3ce(1072):
      case _0x1d56ef + _0x1ca3ce(1198):
        if (_0x25e638) {
          return _0x358c06(mess.OnlyPM)
        }
        if (_0x8b534e) {
          var _0xb99c64 = [
              {
                buttonId: _0x1d56ef + _0x1ca3ce(410),
                buttonText: { displayText: _0x1ca3ce(732) },
                type: 1,
              },
              {
                buttonId: _0x1d56ef + 'skip',
                buttonText: { displayText: _0x1ca3ce(892) },
                type: 1,
              },
            ],
            _0x54f673 =
              '[\u26A0️] Kamu masih dalam sesi chat dengan partner! \u274C'
          return _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
            text: _0x54f673,
            footer: _0x52beea[_0x1ca3ce(1146)],
            buttons: _0xb99c64,
          })
        } else {
          if (_0x3fb1b4) {
            var _0x54f673 = _0x1ca3ce(1239),
              _0xb99c64 = [
                {
                  buttonId: _0x1d56ef + _0x1ca3ce(410),
                  buttonText: { displayText: _0x1ca3ce(732) },
                  type: 1,
                },
              ]
            return _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
              text: _0x54f673,
              footer: _0x52beea[_0x1ca3ce(1146)],
              buttons: _0xb99c64,
            })
          }
        }
        if (_0x4c44c2) {
          var _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(410),
              buttonText: { displayText: _0x1ca3ce(732) },
              type: 1,
            },
            {
              buttonId: _0x1d56ef + _0x1ca3ce(1167),
              buttonText: { displayText: _0x1ca3ce(892) },
              type: 1,
            },
          ]
          _0x4c44c2.b = _0x228102
          _0x4c44c2[_0x1ca3ce(381)] = _0x1ca3ce(666)
          var _0x54f673 =
            _0x1ca3ce(1290) +
            _0x1d56ef +
            _0x1ca3ce(1092) +
            _0x1d56ef +
            'stop -- _hentikan dialog ini_\n' +
            _0x1d56ef +
            _0x1ca3ce(979)
          await _0x3a28a5.sendMessage(_0x4c44c2.a, {
            text: _0x54f673,
            footer: _0x52beea[_0x1ca3ce(1146)],
            buttons: _0xb99c64,
          })
          await _0x3a28a5[_0x1ca3ce(557)](_0x4c44c2.b, {
            text: _0x54f673,
            footer: _0x52beea.footer,
            buttons: _0xb99c64,
          })
        } else {
          if (!_0x8b534e) {
            anonymous[_0x1e1efd] = {
              id: _0x1e1efd,
              a: _0x228102,
              b: '',
              state: 'WAITING',
            }
            var _0xb99c64 = [
                {
                  buttonId: _0x1d56ef + 'stop',
                  buttonText: { displayText: _0x1ca3ce(732) },
                  type: 1,
                },
              ],
              _0x54f673 = _0x1ca3ce(1239)
            await _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
              text: _0x54f673,
              footer: _0x52beea[_0x1ca3ce(1146)],
              buttons: _0xb99c64,
            })
          }
        }
        break
      case _0x1d56ef + _0x1ca3ce(410):
        if (_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1149)])
        }
        if (!_0x24de6d) {
          var _0xb99c64 = [
              {
                buttonId: _0x1d56ef + _0x1ca3ce(1072),
                buttonText: { displayText: _0x1ca3ce(813) },
                type: 1,
              },
            ],
            _0x54f673 = _0x1ca3ce(1437)
          await _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
            text: _0x54f673,
            footer: _0x52beea[_0x1ca3ce(1146)],
            buttons: _0xb99c64,
          })
        } else {
          var _0xb99c64 = [
              {
                buttonId: _0x1d56ef + 'start',
                buttonText: { displayText: '\uD83D\uDD0E SEARCH \uD83D\uDD0E' },
                type: 1,
              },
            ],
            _0x54f673 = _0x1ca3ce(909)
          await _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
            text: _0x54f673,
            footer: _0x52beea[_0x1ca3ce(1146)],
            buttons: _0xb99c64,
          })
          if (_0x51e32b) {
            await _0x3a28a5[_0x1ca3ce(557)](_0x51e32b, {
              text: _0x2928aa,
              footer: _0x52beea.footer,
              buttons: _0xb99c64,
            })
          }
          delete anonymous[_0x24de6d.id]
        }
        break
      case _0x1d56ef + _0x1ca3ce(1104):
      case _0x1d56ef + _0x1ca3ce(1167):
        if (_0x25e638) {
          return _0x358c06(mess.OnlyPM)
        }
        var _0xb99c64 = [
          {
            buttonId: _0x1d56ef + 'start',
            buttonText: { displayText: _0x1ca3ce(813) },
            type: 1,
          },
        ]
        if (!_0x578991) {
          var _0x54f673 = _0x1ca3ce(263)
          return await _0x3a28a5.sendMessage(_0x43727e, {
            text: _0x54f673,
            footer: _0x52beea[_0x1ca3ce(1146)],
            buttons: _0xb99c64,
          })
        } else {
          if (_0x358e91) {
            await _0x3a28a5[_0x1ca3ce(557)](_0x358e91, {
              text: _0x32643b,
              footer: _0x52beea.footer,
              buttons: _0xb99c64,
            })
          }
          delete anonymous[_0x578991.id]
        }
        if (_0x1a65ef) {
          var _0xb99c64 = [
            {
              buttonId: _0x1d56ef + _0x1ca3ce(410),
              buttonText: { displayText: '\u274C STOP \u274C' },
              type: 1,
            },
            {
              buttonId: _0x1d56ef + _0x1ca3ce(1167),
              buttonText: { displayText: _0x1ca3ce(892) },
              type: 1,
            },
          ]
          _0x1a65ef.b = _0x228102
          _0x1a65ef[_0x1ca3ce(381)] = _0x1ca3ce(666)
          var _0x54f673 =
            _0x1ca3ce(1290) +
            _0x1d56ef +
            'skip -- _cari pasangan baru_\n' +
            _0x1d56ef +
            _0x1ca3ce(500)
          await _0x3a28a5[_0x1ca3ce(557)](_0x1a65ef.a, {
            text: _0x54f673,
            footer: _0x52beea.footer,
            buttons: _0xb99c64,
          })
          await _0x3a28a5[_0x1ca3ce(557)](_0x1a65ef.b, {
            text: _0x54f673,
            footer: _0x52beea.footer,
            buttons: _0xb99c64,
          })
        } else {
          anonymous[_0x56c2a1] = {
            id: _0x56c2a1,
            a: _0x228102,
            b: '',
            state: _0x1ca3ce(415),
          }
          var _0xb99c64 = [
              {
                buttonId: _0x1d56ef + _0x1ca3ce(410),
                buttonText: { displayText: _0x1ca3ce(732) },
                type: 1,
              },
            ],
            _0x54f673 = '[\uD83D\uDD0E] Mohon tunggu sedang mencari teman chat'
          await _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
            text: _0x54f673,
            footer: _0x52beea[_0x1ca3ce(1146)],
            buttons: _0xb99c64,
          })
        }
        break
      case _0x1d56ef + 'sendprofile':
      case _0x1d56ef + 'sendprofil':
        if (_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1149)])
        }
        var _0xb99c64 = [
          {
            buttonId: _0x1d56ef + _0x1ca3ce(1072),
            buttonText: { displayText: _0x1ca3ce(813) },
            type: 1,
          },
        ]
        if (!_0x60619f) {
          var _0x54f673 = _0x1ca3ce(263)
          await _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
            text: _0x54f673,
            footer: _0x52beea[_0x1ca3ce(1146)],
            buttons: _0xb99c64,
          })
        } else {
          var _0x2ac065 = _0x36944c(_0x228102, _0xb6a4f0),
            _0x339faa = await _0x3a28a5.sendContact(_0x2ac065, [
              _0x228102[_0x1ca3ce(760)]('@')[0],
            ])
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            { text: '[\u2705] Berhasil mengirim profil ke teman chat anda!' },
            { quoted: _0x1b0526 }
          )
          _0x3a28a5[_0x1ca3ce(557)](
            _0x2ac065,
            { text: _0x1ca3ce(663) },
            { quoted: _0x339faa }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(742):
      case _0x1d56ef + _0x1ca3ce(1334):
        {
          if (!_0x44ac49) {
            return _0x358c06('Linknya Mana?')
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          _0x35efcb = _0x35efcb.replace(/.git$/, '')
          var _0x44563e =
            _0x1ca3ce(902) + _0x3060bf + '/' + _0x35efcb + '/zipball'
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              document: { url: _0x44563e },
              fileName: _0x1b56c0 + _0x1ca3ce(1178),
              mimetype: _0x1ca3ce(1059),
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'ringtone':
        {
          if (!_0x44ac49) {
            return _0x358c06('Contoh :\n' + _0x203d41 + _0x1ca3ce(668))
          }
          _0x358c06(_0x1ca3ce(657) + _0x44ac49 + _0x1ca3ce(369))
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              audio: { url: _0x29cb01[_0x1ca3ce(1096)] },
              mimetype: _0x1ca3ce(1469),
              ptt: true,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(401):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(1024))
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              audio: _0x43e664,
              mimetype: 'audio/mpeg',
              ptt: true,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'hilih':
      case _0x1d56ef + 'halah':
      case _0x1d56ef + _0x1ca3ce(816):
      case _0x1d56ef + 'heleh':
      case _0x1d56ef + _0x1ca3ce(1257):
        if (!_0x5deb4f && !_0x430466[1]) {
          _0x358c06(_0x1ca3ce(280) + _0x203d41)
        }
        _0x358c06(
          _0x5a2393[_0x1ca3ce(1201)](/[aiueo]/g, _0x2ac14b)[_0x1ca3ce(1201)](
            /[AIUEO]/g,
            _0x2ac14b[_0x1ca3ce(758)]()
          )
        ),
          addCmd(_0x203d41.slice(1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(1085):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(1101))
          }
          var _0x39182a = _0x44ac49[_0x1ca3ce(760)]('|')[0],
            _0x420555 = _0x44ac49[_0x1ca3ce(760)]('|')[1]
          _0x358c06(mess.wait)
          var _0x22d864 = await getBuffer(
            _0x1ca3ce(1313) + _0x39182a + _0x1ca3ce(364) + _0x420555
          )
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              image: _0x22d864,
              caption: '\xA9 ' + _0x44ac49,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(587):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + ' yanto')
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x22d864 = await getBuffer(_0x1ca3ce(1293) + _0x44ac49)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x22d864,
              caption: '\xA9 ' + _0x44ac49,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(549):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(616))
          }
          _0x358c06(mess.wait)
          var _0x22d864 = await getBuffer(_0x1ca3ce(1117) + _0x44ac49)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x22d864,
              caption: '\xA9 ' + _0x44ac49,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(265):
        if (!_0x44ac49) {
          return _0x358c06(
            'Yang Mau Di Tulis Apaan? Titit?\n\nContoh :\n' +
              _0x203d41 +
              _0x1ca3ce(1169)
          )
        }
        var _0x54f673 = _0x44ac49
        _0x358c06(mess.wait)
        var _0x339faa = await axios[_0x1ca3ce(961)](
          'https://dt-04.herokuapp.com/nulis?text=' + _0x2b2f59
        )
        if (_0x339faa[_0x1ca3ce(1455)][_0x1ca3ce(1181)]) {
          return _0x358c06(_0x339faa[_0x1ca3ce(1455)].error)
        }
        _0x3a28a5
          .sendMessage(
            _0x43727e,
            {
              image: _0x4c115e,
              caption: _0x1ca3ce(905),
            },
            { quoted: _0x1b0526 }
          )
          [_0x1ca3ce(233)]((_0x4c9a78) => {
            var _0x334fde = _0x1ca3ce
            return _0x358c06(_0x334fde(1482))
          })
        break
      case _0x1d56ef + _0x1ca3ce(755):
      case _0x1d56ef + 'covid':
        {
          if (!_0x44ac49) {
            return _0x358c06('Contoh :\n' + _0x203d41 + _0x1ca3ce(232))
          }
          _0x358c06(_0x34aabe)
        }
        break
      case _0x1d56ef + _0x1ca3ce(1005):
        {
          console.log(_0x13cff3)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0xd8510a[_0x1ca3ce(1280)] },
              caption: _0x26841b,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(978):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + ' Lexxy24')
          }
          _0x358c06(mess.wait)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x6485d,
              caption: _0x1745d8,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'styletext':
        {
          if (!_0x44ac49) {
            return _0x358c06('Contoh :\n' + _0x203d41 + _0x1ca3ce(229))
          }
          var _0x139fa0 = _0x44ac49
          _0x358c06(mess.wait)
          console[_0x1ca3ce(1200)](_0x34d1bf)
          _0x54f673 =
            ' \u300C *STYLE-TEXT* \u300D\n\n*Text Ori :* ' + _0x139fa0 + '\n\n'
          for (let _0x3fd550 of _0x34d1bf) {
            _0x54f673 +=
              '*Nama :* ' +
              _0x3fd550[_0x1ca3ce(1325)] +
              _0x1ca3ce(1472) +
              _0x3fd550.result +
              '\n\n'
          }
          _0x358c06(_0x54f673)
        }
        break
      case _0x1d56ef + 'infogempa':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x5bb989 = await fetchJson(
            'https://hadi-api.herokuapp.com/api/infogempa'
          )
          _0x358c06(_0x58474f)
        }
        break
      case _0x1d56ef + _0x1ca3ce(1087):
        {
          var _0x4aab34 = await fetchJson(_0x1ca3ce(1260) + _0x44ac49)
          if (_0x4aab34[_0x1ca3ce(1113)]) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(1169))
          }
          _0x358c06(_0x4aab34[_0x1ca3ce(600)])
        }
        break
      case _0x1d56ef + 'font2':
        {
          var _0x4aab34 = await fetchJson(
            'https://hadi-api.herokuapp.com/api/font2?teks=' + _0x44ac49
          )
          if (_0x4aab34[_0x1ca3ce(1113)]) {
            return _0x358c06('Contoh :\n' + _0x203d41 + _0x1ca3ce(1169))
          }
          _0x358c06(_0x4aab34[_0x1ca3ce(600)])
        }
        break
      case _0x1d56ef + _0x1ca3ce(1284):
        if (!_0x44ac49) {
          return _0x358c06(_0x1ca3ce(1458) + _0x203d41 + ' google.com')
        }
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          {
            image: { url: _0x555bf9 },
            caption: _0x1ca3ce(1443),
          },
          { quoted: _0x1b0526 }
        )
        break
      case _0x1d56ef + _0x1ca3ce(339):
        if (_0x430466[_0x1ca3ce(676)] < 2) {
          return _0x358c06(_0x1ca3ce(1270) + _0x203d41 + _0x1ca3ce(733))
        }
        _0x358c06(mess[_0x1ca3ce(613)]),
          Musikmatch(_0x44ac49)
            [_0x1ca3ce(1298)](async (_0x18432a) => {
              var _0x245dba = _0x1ca3ce,
                _0x25a1f5 =
                  '*' +
                  _0x18432a.result[_0x245dba(1451)] +
                  _0x245dba(939) +
                  _0x18432a[_0x245dba(600)][_0x245dba(269)] +
                  _0x245dba(1247) +
                  _0x18432a.result[_0x245dba(339)]
              _0x3a28a5[_0x245dba(557)](
                _0x43727e,
                {
                  image: { url: _0x18432a[_0x245dba(600)][_0x245dba(859)] },
                  caption: _0x25a1f5,
                },
                { quoted: _0x1b0526 }
              )
            })
            .catch(() => _0x358c06(_0x1ca3ce(1208)))
        break
      case _0x1d56ef + _0x1ca3ce(1147):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + ' anime')
          }
          var _0x139fa0 = _0x44ac49
          _0x358c06(mess[_0x1ca3ce(613)])
          console.log(_0xf46010)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x2b8fca },
              caption:
                _0x1ca3ce(603) +
                _0x139fa0 +
                '\n*\uD83D\uDD17 Media Url* : ' +
                _0x2b8fca,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1439):
        {
          if (!_0x44ac49) {
            return _0x358c06('Contoh :\n' + _0x203d41 + _0x1ca3ce(898))
          }
          var _0x139fa0 = _0x44ac49
          _0x358c06(mess[_0x1ca3ce(613)])
          console.log(_0x3a6f28)
          _0x54f673 = _0x1ca3ce(1391) + _0x139fa0 + '\n\n'
          for (let _0x7c073f of _0x3a6f28) {
            _0x54f673 +=
              _0x1ca3ce(253) +
              _0x7c073f[_0x1ca3ce(395)] +
              _0x1ca3ce(1285) +
              _0x7c073f[_0x1ca3ce(1518)] +
              _0x1ca3ce(794) +
              _0x7c073f.image +
              '\n\n'
          }
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x190226 },
              caption: _0x54f673,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'cerpen':
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(1218))
          }
          var _0x139fa0 = _0x44ac49
          _0x358c06(mess[_0x1ca3ce(613)])
          console[_0x1ca3ce(1200)](_0x236311)
          _0x358c06(_0x301a84)
        }
        break
      case _0x1d56ef + _0x1ca3ce(941):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(849))
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          _0x1c51bd({ query: _0x44ac49 }).then((_0x195291) => {
            var _0x18b671 = _0x1ca3ce
            let _0x24fd97 = _0x18b671(778) + _0x44ac49 + _0x18b671(1247)
            for (let _0xe9c99d of _0x195291) {
              _0x24fd97 += _0x18b671(425) + _0xe9c99d.title + '\n'
              _0x24fd97 +=
                '\uD83D\uDCF1 *Description* : ' +
                _0xe9c99d[_0x18b671(1509)] +
                '\n'
              _0x24fd97 +=
                _0x18b671(548) + _0xe9c99d[_0x18b671(538)] + _0x18b671(1180)
            }
            _0x358c06(_0x24fd97)
          })
        }
        break
      case _0x1d56ef + 'gimage':
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(840) + _0x203d41 + _0x1ca3ce(646))
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          _0x4b57f7(_0x44ac49, async (_0x1e37cf, _0x1e9392) => {
            var _0x147ffc = _0x1ca3ce,
              _0x21df35 = _0x1e9392,
              _0x5873d3 =
                _0x21df35[
                  Math[_0x147ffc(230)](
                    Math[_0x147ffc(551)]() * _0x21df35[_0x147ffc(676)]
                  )
                ][_0x147ffc(667)]
            _0x3a28a5[_0x147ffc(557)](
              _0x43727e,
              {
                image: { url: _0x5873d3 },
                caption:
                  _0x147ffc(835) + _0x44ac49 + _0x147ffc(828) + _0x5873d3,
              },
              { quoted: _0x1b0526 }
            )
          })
        }
        break
      case _0x1d56ef + _0x1ca3ce(1112):
        if (!_0x34d44d) {
          return _0x358c06(_0x1ca3ce(559) + _0x203d41)
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x3f1172[_0x1ca3ce(707)](
            _0x1ca3ce(802),
            fs[_0x1ca3ce(957)](_0x2f763f),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x3f1172,
          })
            [_0x1ca3ce(1298)]((_0x5ad6a2) => _0x5ad6a2[_0x1ca3ce(766)]())
            [_0x1ca3ce(1298)]((_0x45bec6) => {
              var _0x1b6a4f = _0x1ca3ce
              _0x358c06(_0x1b6a4f(1235))
              _0x358c06(_0x1b6a4f(1228) + _0x45bec6[0].src)
              if (fs[_0x1b6a4f(1453)](_0x2f763f)) {
                fs[_0x1b6a4f(681)](_0x2f763f)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(314):
        if (!_0x34d44d) {
          return _0x358c06('reply foto dengan pesan ' + _0x203d41)
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x3c3479[_0x1ca3ce(707)](
            'file',
            fs.readFileSync(_0x419424),
            '.tmp',
            _0x1ca3ce(785)
          )
          fetch('https://telegra.ph/upload', {
            method: _0x1ca3ce(946),
            body: _0x3c3479,
          })
            .then((_0x4a3705) => _0x4a3705[_0x1ca3ce(766)]())
            [_0x1ca3ce(1298)]((_0x17531f) => {
              var _0x470c90 = _0x1ca3ce
              _0x358c06(_0x470c90(1235))
              let _0x4ef803 = _0x470c90(508) + _0x17531f[0][_0x470c90(790)]
              _0x3a28a5[_0x470c90(557)](
                _0x43727e,
                {
                  image: { url: _0x4ef803 },
                  caption: _0x470c90(1360),
                },
                { quoted: _0x1b0526 }
              )
              if (fs[_0x470c90(1453)](_0x419424)) {
                fs[_0x470c90(681)](_0x419424)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(1450):
        if (!_0x34d44d) {
          return _0x358c06('reply foto dengan pesan ' + _0x203d41)
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x2756ac.append(
            'file',
            fs.readFileSync(_0x18d1bd),
            _0x1ca3ce(385),
            '.jpg'
          )
          fetch('https://telegra.ph/upload', {
            method: _0x1ca3ce(946),
            body: _0x2756ac,
          })
            [_0x1ca3ce(1298)]((_0x4926c1) => _0x4926c1.json())
            [_0x1ca3ce(1298)]((_0x4a791f) => {
              var _0x455d31 = _0x1ca3ce
              _0x358c06(_0x455d31(1235))
              let _0x4d1491 = _0x455d31(765) + _0x4a791f[0][_0x455d31(790)]
              _0x3a28a5.sendMessage(
                _0x43727e,
                {
                  image: { url: _0x4d1491 },
                  caption: _0x455d31(1360),
                },
                { quoted: _0x1b0526 }
              )
              if (fs[_0x455d31(1453)](_0x18d1bd)) {
                fs.unlinkSync(_0x18d1bd)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(1491):
        {
          if (!_0x2e401c) {
            return _0x358c06(mess[_0x1ca3ce(1398)])
          }
          if (!_0x34d44d) {
            return _0x358c06(_0x1ca3ce(559) + _0x203d41)
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          if (_0x5bdc7d || _0x34d44d) {
          }
          _0x358c06(_0x1ca3ce(438))
        }
        break
      case _0x1d56ef + 'petimati':
        if (!_0x34d44d) {
          return _0x358c06(_0x1ca3ce(559) + _0x203d41)
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x105066.append(
            _0x1ca3ce(802),
            fs.readFileSync(_0x4cb51b),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x105066,
          })
            .then((_0x2f8dea) => _0x2f8dea[_0x1ca3ce(766)]())
            [_0x1ca3ce(1298)]((_0x53ab51) => {
              var _0x446405 = _0x1ca3ce
              _0x358c06(_0x446405(1235))
              let _0x588111 =
                'https://api-yogipw.herokuapp.com/api/imgedit/petimati?url=https://telegra.ph' +
                _0x53ab51[0][_0x446405(790)]
              _0x3a28a5[_0x446405(557)](
                _0x43727e,
                {
                  image: { url: _0x588111 },
                  caption: _0x446405(1360),
                },
                { quoted: _0x1b0526 }
              )
              if (fs[_0x446405(1453)](_0x4cb51b)) {
                fs[_0x446405(681)](_0x4cb51b)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(1328):
        if (!_0x34d44d) {
          return _0x358c06(_0x1ca3ce(559) + _0x203d41)
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x58034e[_0x1ca3ce(707)](
            'file',
            fs[_0x1ca3ce(957)](_0x10fd78),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x58034e,
          })
            [_0x1ca3ce(1298)]((_0x323773) => _0x323773[_0x1ca3ce(766)]())
            [_0x1ca3ce(1298)]((_0x475edf) => {
              var _0xedef60 = _0x1ca3ce
              _0x358c06(_0xedef60(1235))
              let _0x5899b1 = _0xedef60(1028) + _0x475edf[0].src
              _0x3a28a5.sendMessage(
                _0x43727e,
                {
                  image: { url: _0x5899b1 },
                  caption: _0xedef60(1360),
                },
                { quoted: _0x1b0526 }
              )
              if (fs[_0xedef60(1453)](_0x10fd78)) {
                fs.unlinkSync(_0x10fd78)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(550):
        if (!_0x34d44d) {
          return _0x358c06('reply foto dengan pesan ' + _0x203d41)
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x40d2e2[_0x1ca3ce(707)](
            _0x1ca3ce(802),
            fs.readFileSync(_0x20479e),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x40d2e2,
          })
            [_0x1ca3ce(1298)]((_0x7b39f6) => _0x7b39f6.json())
            .then((_0x25543d) => {
              var _0x37ceb8 = _0x1ca3ce
              _0x358c06(_0x37ceb8(1235))
              let _0x354d8b = _0x37ceb8(876) + _0x25543d[0].src
              _0x3a28a5[_0x37ceb8(557)](
                _0x43727e,
                {
                  image: { url: _0x354d8b },
                  caption: 'done!!',
                },
                { quoted: _0x1b0526 }
              )
              if (fs[_0x37ceb8(1453)](_0x20479e)) {
                fs[_0x37ceb8(681)](_0x20479e)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(309):
        if (!_0x34d44d) {
          return _0x358c06(_0x1ca3ce(559) + _0x203d41)
        }
        _0x358c06(mess.wait)
        if (_0x5bdc7d || _0x34d44d) {
          _0x4cc6d5[_0x1ca3ce(707)](
            _0x1ca3ce(802),
            fs[_0x1ca3ce(957)](_0x336404),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x4cc6d5,
          })
            [_0x1ca3ce(1298)]((_0x4c74f6) => _0x4c74f6[_0x1ca3ce(766)]())
            .then((_0x1e8ed0) => {
              var _0x20be59 = _0x1ca3ce
              _0x358c06('Proses Convert..')
              let _0x5a417c = _0x20be59(651) + _0x1e8ed0[0].src
              _0x3a28a5[_0x20be59(557)](
                _0x43727e,
                {
                  image: { url: _0x5a417c },
                  caption: _0x20be59(1360),
                },
                { quoted: _0x1b0526 }
              )
              if (fs[_0x20be59(1453)](_0x336404)) {
                fs[_0x20be59(681)](_0x336404)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(630):
        if (!_0x34d44d) {
          return _0x358c06('reply foto dengan pesan ' + _0x203d41)
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x4e8219.append(
            _0x1ca3ce(802),
            fs[_0x1ca3ce(957)](_0x4bb87c),
            _0x1ca3ce(385),
            '.jpg'
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x4e8219,
          })
            [_0x1ca3ce(1298)]((_0x311560) => _0x311560[_0x1ca3ce(766)]())
            .then((_0x579575) => {
              var _0x10b1dd = _0x1ca3ce
              _0x358c06(_0x10b1dd(1235))
              let _0x2f3a19 = _0x10b1dd(1019) + _0x579575[0].src
              _0x3a28a5[_0x10b1dd(557)](
                _0x43727e,
                {
                  image: { url: _0x2f3a19 },
                  caption: _0x10b1dd(1360),
                },
                { quoted: _0x1b0526 }
              )
              if (fs[_0x10b1dd(1453)](_0x4bb87c)) {
                fs[_0x10b1dd(681)](_0x4bb87c)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(995):
        if (!_0x34d44d) {
          return _0x358c06(_0x1ca3ce(559) + _0x203d41 + ' Hai|Lexxy')
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x4de1a6.append(
            _0x1ca3ce(802),
            fs.readFileSync(_0x36ce0a),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x4de1a6,
          })
            [_0x1ca3ce(1298)]((_0x38b1d2) => _0x38b1d2.json())
            [_0x1ca3ce(1298)]((_0x3fbb27) => {
              var _0xbff203 = _0x1ca3ce
              _0x358c06(_0xbff203(1235))
              let _0x32bf98 =
                _0xbff203(255) +
                _0x126759 +
                '/' +
                _0x1beadf +
                _0xbff203(886) +
                _0x3fbb27[0][_0xbff203(790)]
              _0x3a28a5[_0xbff203(557)](
                _0x43727e,
                {
                  image: { url: _0x32bf98 },
                  caption: _0xbff203(1367),
                },
                { quoted: _0x1b0526 }
              )
              if (fs[_0xbff203(1453)](_0x36ce0a)) {
                fs[_0xbff203(681)](_0x36ce0a)
              }
            })
        }
        break
      case _0x1d56ef + _0x1ca3ce(945):
        if (!_0x34d44d) {
          return _0x358c06('reply foto dengan caption ' + _0x203d41)
        }
        _0x358c06(mess[_0x1ca3ce(613)])
        if (_0x5bdc7d || _0x34d44d) {
          _0x1b3dc0[_0x1ca3ce(707)](
            'file',
            fs[_0x1ca3ce(957)](_0x597b37),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x1b3dc0,
          })
            .then((_0x4cc7b0) => _0x4cc7b0[_0x1ca3ce(766)]())
            [_0x1ca3ce(1298)]((_0x10ec69) => {
              var _0x3399e5 = _0x1ca3ce
              _0x358c06(_0x3399e5(1235))
              let _0xbdfe47 = _0x3399e5(1230) + _0x10ec69[0].src
              _0x3a28a5[_0x3399e5(557)](
                _0x43727e,
                {
                  image: { url: _0xbdfe47 },
                  caption: _0x3399e5(1089),
                },
                { quoted: _0x1b0526 }
              )
              if (fs.existsSync(_0x597b37)) {
                fs[_0x3399e5(681)](_0x597b37)
              }
            })
        }
        break
      case _0x1d56ef + 'toimg':
      case _0x1d56ef + _0x1ca3ce(231):
      case _0x1d56ef + _0x1ca3ce(1074):
      case _0x1d56ef + _0x1ca3ce(1047):
        if (!_0x54a893) {
          return _0x358c06(_0x1ca3ce(565))
        }
        var _0x19baa4 = await downloadContentFromMessage(
            _0x1b0526[_0x1ca3ce(754)].extendedTextMessage?.contextInfo[
              _0x1ca3ce(1521)
            ][_0x1ca3ce(447)],
            _0x1ca3ce(287)
          ),
          _0x2d02dc = Buffer[_0x1ca3ce(371)]([])
        for await (const _0x29657c of _0x19baa4) {
          _0x2d02dc = Buffer[_0x1ca3ce(1168)]([_0x2d02dc, _0x29657c])
        }
        var _0x23dea2 = 'media/' + getRandom(_0x1ca3ce(1185)),
          _0x114b16 = _0x1ca3ce(1390) + getRandom(_0x1ca3ce(983))
        fs[_0x1ca3ce(1512)]('./' + _0x23dea2, _0x2d02dc)
        _0x54a893 &&
        _0x1b0526[_0x1ca3ce(754)][_0x1ca3ce(471)][_0x1ca3ce(723)].quotedMessage[
          _0x1ca3ce(447)
        ].isAnimated !== true
          ? (_0x358c06(mess[_0x1ca3ce(613)]),
            exec(
              'ffmpeg -i ./' + _0x23dea2 + ' ./' + _0x114b16,
              (_0x566c30) => {
                var _0x4d0ee5 = _0x1ca3ce
                fs[_0x4d0ee5(681)]('./' + _0x23dea2)
                if (_0x566c30) {
                  return _0x358c06(mess[_0x4d0ee5(1181)][_0x4d0ee5(1175)])
                }
                _0x3a28a5.sendMessage(
                  _0x43727e,
                  {
                    caption: _0x4d0ee5(426),
                    image: fs[_0x4d0ee5(957)]('./' + _0x114b16),
                  },
                  { quoted: _0x56b3fb }
                )
                fs[_0x4d0ee5(681)]('./' + _0x114b16)
              }
            ))
          : (_0x358c06(mess[_0x1ca3ce(613)]),
            webp2mp4File('./' + _0x23dea2)[_0x1ca3ce(1298)](
              async (_0xb2c4b5) => {
                var _0x41fbd1 = _0x1ca3ce
                fs[_0x41fbd1(681)]('./' + _0x23dea2)
                _0x3a28a5[_0x41fbd1(557)](
                  _0x43727e,
                  {
                    caption: '*Sticker Convert To Video!*',
                    video: await getBuffer(_0xb2c4b5[_0x41fbd1(1455)]),
                  },
                  { quoted: _0x56b3fb }
                )
              }
            ))
        addCmd(_0x203d41.slice(1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(287):
      case _0x1d56ef + 'stiker':
      case _0x1d56ef + 's':
        if (_0x5bdc7d || _0x34d44d) {
          var _0x19baa4 = await downloadContentFromMessage(
              _0x1b0526.message[_0x1ca3ce(878)] ||
                _0x1b0526[_0x1ca3ce(754)][_0x1ca3ce(471)]?[_0x1ca3ce(723)][
                  _0x1ca3ce(1521)
                ][_0x1ca3ce(878)],
              'image'
            ),
            _0x2d02dc = Buffer.from([])
          for await (const _0x6f294c of _0x19baa4) {
            _0x2d02dc = Buffer[_0x1ca3ce(1168)]([_0x2d02dc, _0x6f294c])
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x23dea2 = _0x1ca3ce(823) + getRandom('.jpg'),
            _0x114b16 = _0x1ca3ce(823) + getRandom('.webp')
          fs[_0x1ca3ce(1512)]('./' + _0x23dea2, _0x2d02dc)
          ffmpeg('./' + _0x23dea2)
            .on(_0x1ca3ce(1181), console[_0x1ca3ce(1181)])
            .on(_0x1ca3ce(363), () => {
              var _0x164265 = _0x1ca3ce
              exec(
                _0x164265(274) + _0x114b16 + ' -o ./' + _0x114b16,
                async (_0x3032d5) => {
                  var _0x1dcd7f = _0x164265
                  _0x3a28a5[_0x1dcd7f(557)](
                    _0x43727e,
                    { sticker: fs[_0x1dcd7f(957)]('./' + _0x114b16) },
                    { quoted: _0x1b0526 }
                  )
                  fs[_0x1dcd7f(681)]('./' + _0x23dea2)
                  fs[_0x1dcd7f(681)]('./' + _0x114b16)
                }
              )
            })
            [_0x1ca3ce(904)]([
              _0x1ca3ce(1052),
              _0x1ca3ce(710),
              _0x1ca3ce(567),
              _0x1ca3ce(968),
            ])
            [_0x1ca3ce(1160)](_0x1ca3ce(1078))
            [_0x1ca3ce(958)]('' + _0x114b16)
        } else {
          if (_0x3d5c13 || _0x353dc6) {
            var _0x19baa4 = await downloadContentFromMessage(
                _0x1b0526[_0x1ca3ce(754)][_0x1ca3ce(878)] ||
                  _0x1b0526[_0x1ca3ce(754)].extendedTextMessage?.contextInfo[
                    _0x1ca3ce(1521)
                  ][_0x1ca3ce(1414)],
                _0x1ca3ce(434)
              ),
              _0x2d02dc = Buffer[_0x1ca3ce(371)]([])
            for await (const _0x5da648 of _0x19baa4) {
              _0x2d02dc = Buffer[_0x1ca3ce(1168)]([_0x2d02dc, _0x5da648])
            }
            var _0x23dea2 = 'sticker/' + getRandom(_0x1ca3ce(915)),
              _0x114b16 = _0x1ca3ce(823) + getRandom(_0x1ca3ce(1185))
            fs.writeFileSync('./' + _0x23dea2, _0x2d02dc)
            ffmpeg('./' + _0x23dea2)
              .on(_0x1ca3ce(1181), console.error)
              .on(_0x1ca3ce(363), () => {
                var _0xfb73ef = _0x1ca3ce
                exec(
                  _0xfb73ef(274) + _0x114b16 + _0xfb73ef(627) + _0x114b16,
                  async (_0x38e938) => {
                    var _0xcb9727 = _0xfb73ef
                    _0x3a28a5[_0xcb9727(557)](
                      _0x43727e,
                      { sticker: fs[_0xcb9727(957)]('./' + _0x114b16) },
                      { quoted: _0x1b0526 }
                    )
                    fs.unlinkSync('./' + _0x23dea2)
                    fs[_0xcb9727(681)]('./' + _0x114b16)
                  }
                )
              })
              .addOutputOptions([
                _0x1ca3ce(1052),
                _0x1ca3ce(710),
                _0x1ca3ce(567),
                "scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse",
              ])
              [_0x1ca3ce(1160)](_0x1ca3ce(1078))
              [_0x1ca3ce(958)]('' + _0x114b16)
          } else {
            _0x358c06(_0x1ca3ce(1300) + _0x203d41 + _0x1ca3ce(1289))
          }
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + 'emojimix2':
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + ' \uD83D\uDE05')
          }
          var _0x5bb989 = await fetchJson(
            'https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=' +
              _0x950487
          )
          for (let _0xd124f6 of _0x5bb989[_0x1ca3ce(1304)]) {
            let _0x14d75f = await _0x3a28a5[_0x1ca3ce(1217)](
              _0x43727e,
              _0xd124f6[_0x1ca3ce(667)],
              _0x1b0526,
              {
                packname: packnamenya,
                author: authornya,
                categories: _0xd124f6[_0x1ca3ce(1507)],
              }
            )
            await fs[_0x1ca3ce(681)](_0x14d75f)
          }
        }
        break
      case _0x1d56ef + _0x1ca3ce(1416):
        {
        }
        break
      case _0x1d56ef + 'owner':
      case _0x1d56ef + 'dev':
        _0x5f41b1(
          _0x43727e,
          _0x2ba8f7[_0x1ca3ce(760)](_0x1ca3ce(917))[0],
          _0x55ad61,
          _0x1b0526
        )[_0x1ca3ce(1298)]((_0x49e80a) =>
          _0x3a28a5.sendMessage(
            _0x43727e,
            { text: _0x1ca3ce(670) },
            { quoted: _0x49e80a }
          )
        ),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(986):
      case _0x1d56ef + _0x1ca3ce(694):
      case _0x1d56ef + _0x1ca3ce(357):
        {
          if (!_0x2e401c && !_0x182037) {
            return _0x1ca3ce(1487)
          }
          _0x358c06(_0x5b4e24)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41),
          limitAdd(_0x228102, glimit)
        break
      case _0x1d56ef + 'dashboard':
      case _0x1d56ef + 'db':
        {
          if (_0xe01c77 > 999) {
            _0xe01c77 = 999
          }
          _0x54f673 =
            _0x1ca3ce(286) +
            _0xd38564[_0x1ca3ce(580)] +
            _0x1ca3ce(586) +
            _0x335e3a[_0x1ca3ce(580)] +
            '_\n_Chat Pribadi : ' +
            _0x53f5ff[_0x1ca3ce(676)] +
            _0x1ca3ce(1405) +
            _0x1350fb[_0x1ca3ce(676)] +
            _0x1ca3ce(759)
          for (let _0x279d1d = 0; _0x279d1d < _0xe01c77; _0x279d1d++) {
            _0x54f673 +=
              _0x1ca3ce(748) +
              commund[_0x279d1d].id +
              _0x1ca3ce(907) +
              commund[_0x279d1d][_0x1ca3ce(1009)] +
              '_'
          }
          _0x358c06(_0x54f673)
        }
        break
      case _0x1d56ef + _0x1ca3ce(420):
      case _0x1d56ef + _0x1ca3ce(273):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (_0xeb8e3c[_0x1ca3ce(676)] === 0) {
          return _0x358c06(_0x1ca3ce(864))
        }
        if (!isAlreadyResponListGroup(_0x43727e, _0xeb8e3c)) {
          return _0x358c06(_0x1ca3ce(792))
        }
        for (let _0x2d9299 of _0xeb8e3c) {
          _0x2d9299.id === _0x43727e &&
            _0x6252ef[_0x1ca3ce(383)]({
              title: _0x2d9299.key,
              rowId: _0x2d9299[_0x1ca3ce(503)],
            })
        }
        _0x3a28a5.sendMessage(_0x43727e, _0x27f066),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'addlist':
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        var _0x39182a = _0x44ac49[_0x1ca3ce(760)]('@')[0],
          _0x420555 = _0x44ac49.split('@')[1]
        if (!_0x44ac49[_0x1ca3ce(1111)]('@')) {
          return _0x358c06(
            'Gunakan dengan cara ' +
              _0x203d41 +
              _0x1ca3ce(1381) +
              _0x203d41 +
              _0x1ca3ce(1091)
          )
        }
        if (isAlreadyResponList(_0x43727e, _0x39182a, _0xeb8e3c)) {
          return _0x358c06(_0x1ca3ce(922) + _0x39182a + _0x1ca3ce(1205))
        }
        if (_0x5bdc7d || _0x34d44d) {
          _0x83e918[_0x1ca3ce(707)](
            _0x1ca3ce(802),
            fs[_0x1ca3ce(957)](_0x1117e1),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x83e918,
          })
            [_0x1ca3ce(1298)]((_0x4c79c7) => _0x4c79c7[_0x1ca3ce(766)]())
            [_0x1ca3ce(1298)]((_0x1c273c) => {
              var _0xccdab2 = _0x1ca3ce
              addResponList(
                _0x43727e,
                _0x39182a,
                _0x420555,
                true,
                _0xccdab2(1228) + _0x1c273c[0][_0xccdab2(790)],
                _0xeb8e3c
              )
              _0x358c06(_0xccdab2(501) + _0x39182a + '*')
              if (fs.existsSync(_0x1117e1)) {
                fs[_0xccdab2(681)](_0x1117e1)
              }
            })
        } else {
          addResponList(_0x43727e, _0x39182a, _0x420555, false, '-', _0xeb8e3c)
          _0x358c06(_0x1ca3ce(1139) + _0x39182a + '*')
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(920):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (_0xeb8e3c[_0x1ca3ce(676)] === 0) {
          return _0x358c06('Belum ada list message di database')
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              ' *key*\n\n_Contoh_\n\n' +
              _0x203d41 +
              ' hello'
          )
        }
        if (!isAlreadyResponList(_0x43727e, _0x44ac49, _0xeb8e3c)) {
          return _0x358c06(_0x1ca3ce(288) + _0x44ac49 + _0x1ca3ce(1202))
        }
        delResponList(_0x43727e, _0x44ac49, _0xeb8e3c),
          _0x358c06(_0x1ca3ce(756) + _0x44ac49 + '*'),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1272):
        {
          for (let _0x17a197 of _0x328efa) {
            let _0x4ead28 = await _0x3a28a5[_0x1ca3ce(826)](_0x17a197)
            if (_0x4ead28[_0x1ca3ce(940)] === 'undefined') {
              var _0x3bcea1 = false
            } else {
              var _0x3bcea1 = _0x4ead28.owner
            }
            _0x5e5ae8 +=
              _0x1ca3ce(1519) +
              (_0x4ead28[_0x1ca3ce(1283)]
                ? _0x4ead28[_0x1ca3ce(1283)]
                : _0x1ca3ce(671)) +
              '\nOwner : ' +
              (_0x3bcea1
                ? '@' + _0x3bcea1[_0x1ca3ce(760)]('@')[0]
                : 'undefined') +
              _0x1ca3ce(1424) +
              (_0x4ead28.id ? _0x4ead28.id : _0x1ca3ce(671)) +
              '\nDibuat : ' +
              (_0x4ead28[_0x1ca3ce(1426)]
                ? moment(_0x4ead28.creation * 1000)
                    .tz(_0x1ca3ce(386))
                    [_0x1ca3ce(891)](_0x1ca3ce(335))
                : _0x1ca3ce(671)) +
              _0x1ca3ce(1370) +
              (_0x4ead28[_0x1ca3ce(1362)][_0x1ca3ce(676)]
                ? _0x4ead28[_0x1ca3ce(1362)].length
                : _0x1ca3ce(671))
          }
          _0x358c06(_0x5e5ae8)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'listpc':
        {
          for (let _0x4c1bac of _0x1a6640) {
            _0x57057c +=
              _0x1ca3ce(709) +
              _0x4c1bac.id[_0x1ca3ce(760)]('@')[0] +
              _0x1ca3ce(246) +
              _0x4c1bac[_0x1ca3ce(570)] +
              '\nLastchat : ' +
              moment(_0x4c1bac[_0x1ca3ce(1441)] * 1000)
                .tz(_0x1ca3ce(386))
                .format('DD/MM/YYYY HH:mm:ss')
          }
          _0x358c06(_0x57057c)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'mediafire':
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(480) +
              _0x203d41 +
              _0x1ca3ce(1017) +
              _0x203d41 +
              _0x1ca3ce(934)
          )
        }
        _0x358c06(_0x101132),
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              document: { url: _0x4ac884[0][_0x1ca3ce(538)] },
              fileName: _0x4ac884[0][_0x1ca3ce(1106)],
              mimetype: _0x4ac884[0].mime,
            },
            { quoted: _0x1b0526 }
          ),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(976):
      case _0x1d56ef + 'mp4':
        if (!_0x44ac49) {
          return _0x358c06(_0x1ca3ce(1270) + _0x203d41 + _0x1ca3ce(219))
        }
        var _0x4ff8d5 = await fetchJson(
            'https://hadi-api.herokuapp.com/api/yt2/video?url=' + _0x44ac49
          ),
          _0x23016c = _0x4ff8d5[_0x1ca3ce(600)],
          _0x1469ff =
            _0x1ca3ce(911) +
            _0x23016c[_0x1ca3ce(395)] +
            _0x1ca3ce(1389) +
            _0x23016c.resolution +
            _0x1ca3ce(1211) +
            _0x23016c.size +
            '\n*\u227B Type : ' +
            _0x23016c[_0x1ca3ce(619)] +
            _0x1ca3ce(1032) +
            _0x430466[1] +
            _0x1ca3ce(256),
          _0x54f673 = _0x1ca3ce(1150)
        _0x3a28a5.sendMessage(
          _0x43727e,
          {
            image: { url: _0x23016c[_0x1ca3ce(859)] },
            caption: _0x1469ff,
          },
          { quoted: _0x1b0526 }
        ),
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              video: { url: _0x23016c[_0x1ca3ce(1291)] },
              caption: _0x54f673,
            },
            { quoted: _0x1b0526 }
          ),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + 'ytmp3':
      case _0x1d56ef + 'mp3':
        if (!_0x44ac49) {
          return _0x358c06(_0x1ca3ce(1270) + _0x203d41 + _0x1ca3ce(219))
        }
        var _0x4ff8d5 = await fetchJson(_0x1ca3ce(980) + _0x44ac49),
          _0x23016c = _0x4ff8d5[_0x1ca3ce(600)],
          _0x1469ff =
            _0x1ca3ce(911) +
            _0x23016c[_0x1ca3ce(395)] +
            _0x1ca3ce(1389) +
            _0x23016c[_0x1ca3ce(1425)] +
            _0x1ca3ce(1211) +
            _0x23016c.size +
            _0x1ca3ce(542) +
            _0x23016c[_0x1ca3ce(619)] +
            '\n*\u227B Url Source :* ' +
            _0x430466[1] +
            _0x1ca3ce(256),
          _0x54f673 = _0x1ca3ce(1150)
        _0x3a28a5.sendMessage(
          _0x43727e,
          {
            image: { url: _0x23016c[_0x1ca3ce(859)] },
            caption: _0x1469ff,
          },
          { quoted: _0x1b0526 }
        ),
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              audio: { url: _0x23016c[_0x1ca3ce(1070)] },
              mimetype: _0x1ca3ce(1469),
              fileName: _0x23016c[_0x1ca3ce(395)] + _0x1ca3ce(460),
            },
            { quoted: _0x1b0526 }
          ),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(620):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1224) + _0x203d41 + _0x1ca3ce(597))
          }
          _0x358c06(_0x1ca3ce(1366) + _0x44ac49)
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              image: _0x54125b,
              caption: _0x1465bf,
            },
            { quoted: _0x1b0526 }
          )
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              audio: { url: _0x2ac0a4 },
              mimetype: _0x1ca3ce(1469),
              fileName: _0x53f5e9[_0x1ca3ce(600)].title + '.mp3',
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1093):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(767))
          }
          var _0x44563e = _0x44ac49
          _0x358c06(mess[_0x1ca3ce(613)])
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              image: _0x5c638,
              caption: _0x4018f9,
            },
            { quoted: _0x1b0526 }
          )
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              audio: { url: _0x6a2f0e[_0x1ca3ce(600)][_0x1ca3ce(678)] },
              mimetype: 'audio/mpeg',
              fileName: '' + _0x6a2f0e.result.judul,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(320):
        if (!_0x44ac49) {
          return _0x358c06(_0x1ca3ce(1224) + _0x203d41 + _0x1ca3ce(597))
        }
        _0x358c06('Searching.. ' + _0x44ac49)
        var _0x5bb989 =
          _0x515bf1[_0x1ca3ce(330)][
            Math[_0x1ca3ce(230)](
              Math[_0x1ca3ce(551)]() * _0x515bf1[_0x1ca3ce(330)].length
            )
          ]
        _0x3a28a5.sendMessage(_0x43727e, _0x8f7ba1, { quoted: _0x1b0526 })
        break
      case _0x1d56ef + _0x1ca3ce(1383):
      case _0x1d56ef + 'update':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        var _0x39182a = _0x44ac49.split('@')[0],
          _0x420555 = _0x44ac49[_0x1ca3ce(760)]('@')[1]
        if (!_0x44ac49[_0x1ca3ce(1111)]('@')) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              ' *key@response*\n\n_Contoh_\n\n' +
              _0x203d41 +
              _0x1ca3ce(1091)
          )
        }
        if (!isAlreadyResponListGroup(_0x43727e, _0xeb8e3c)) {
          return _0x358c06('Maaf, untuk key *' + _0x39182a + _0x1ca3ce(1042))
        }
        if (_0x5bdc7d || _0x34d44d) {
          _0x35be55.append(
            _0x1ca3ce(802),
            fs[_0x1ca3ce(957)](_0x9f5d19),
            _0x1ca3ce(385),
            _0x1ca3ce(785)
          )
          fetch(_0x1ca3ce(435), {
            method: _0x1ca3ce(946),
            body: _0x35be55,
          })
            [_0x1ca3ce(1298)]((_0x983785) => _0x983785.json())
            [_0x1ca3ce(1298)]((_0x3519c0) => {
              var _0x299028 = _0x1ca3ce
              updateResponList(
                _0x43727e,
                _0x39182a,
                _0x420555,
                true,
                _0x299028(1228) + _0x3519c0[0][_0x299028(790)],
                _0xeb8e3c
              )
              _0x358c06(_0x299028(793) + _0x39182a + '*')
              if (fs.existsSync(_0x9f5d19)) {
                fs[_0x299028(681)](_0x9f5d19)
              }
            })
        } else {
          updateResponList(
            _0x43727e,
            _0x39182a,
            _0x420555,
            false,
            '-',
            _0xeb8e3c
          )
          _0x358c06(_0x1ca3ce(793) + _0x39182a + '*')
        }
        break
      case _0x1d56ef + _0x1ca3ce(390):
        if (_0x430466[_0x1ca3ce(676)] < 3) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              _0x203d41 +
              _0x1ca3ce(1486)
          )
        }
        var _0x3dc31e = Number(_0x430466[1]),
          _0xf15f6a = Number(_0x430466[2])
        _0x358c06('' + (_0x3dc31e + _0xf15f6a)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'kurang':
        if (_0x430466.length < 3) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              _0x1ca3ce(638) +
              _0x203d41 +
              _0x1ca3ce(1486)
          )
        }
        var _0x3dc31e = Number(_0x430466[1]),
          _0xf15f6a = Number(_0x430466[2])
        _0x358c06('' + (_0x3dc31e - _0xf15f6a)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1081):
        if (_0x430466.length < 3) {
          return _0x358c06(
            'Gunakan dengan cara ' +
              _0x203d41 +
              ' *angka* *angka*\n\n_Contoh_\n\n' +
              _0x203d41 +
              ' 1 2'
          )
        }
        var _0x3dc31e = Number(_0x430466[1]),
          _0xf15f6a = Number(_0x430466[2])
        _0x358c06('' + _0x3dc31e * _0xf15f6a),
          addCmd(_0x203d41.slice(1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'bagi':
        if (_0x430466[_0x1ca3ce(676)] < 3) {
          return _0x358c06(
            'Gunakan dengan cara ' +
              _0x203d41 +
              _0x1ca3ce(638) +
              _0x203d41 +
              _0x1ca3ce(1486)
          )
        }
        var _0x3dc31e = Number(_0x430466[1]),
          _0xf15f6a = Number(_0x430466[2])
        _0x358c06('' + _0x3dc31e / _0xf15f6a),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case 'p':
      case _0x1ca3ce(505):
        if (!_0x25e638) {
          return _0x1ca3ce(419)
        }
        if (!_0x2e401c && !_0x182037) {
          return _0x1ca3ce(1487)
        }
        if (!_0x1aa604) {
          return _0x1ca3ce(533)
        }
        _0x473829 !== undefined
          ? _0x4b9e39(
              _0x473829[_0x1ca3ce(1201)](_0x1ca3ce(1448), _0x102651.chats)
                .replace(
                  _0x1ca3ce(1106),
                  _0x102651[_0x1ca3ce(240)][_0x1ca3ce(760)]('@')[0]
                )
                [_0x1ca3ce(1201)](_0x1ca3ce(1339), _0x75cf32)
                [_0x1ca3ce(1201)](_0x1ca3ce(1440), _0x6596fc),
              [_0x102651[_0x1ca3ce(240)]],
              true
            )
          : _0x4b9e39(_0x561abf, [_0x102651[_0x1ca3ce(240)]], true)
        addCmd(_0x203d41.slice(1), 1, commund), _0x59f4e5(_0x228102, _0x203d41)
        break
      case 'd':
      case _0x1ca3ce(1488):
        if (!_0x25e638) {
          return _0x1ca3ce(419)
        }
        if (!_0x2e401c && !_0x182037) {
          return _0x1ca3ce(1487)
        }
        if (!_0x1aa604) {
          return _0x1ca3ce(533)
        }
        _0xb03d2e !== undefined
          ? _0x4b9e39(
              _0xb03d2e[_0x1ca3ce(1201)](
                _0x1ca3ce(1448),
                _0x102651[_0x1ca3ce(1418)]
              )
                [_0x1ca3ce(1201)](
                  'nama',
                  _0x102651[_0x1ca3ce(240)][_0x1ca3ce(760)]('@')[0]
                )
                [_0x1ca3ce(1201)](_0x1ca3ce(1339), _0x75cf32)
                .replace(_0x1ca3ce(1440), _0x6596fc),
              [_0x102651[_0x1ca3ce(240)]],
              true
            )
          : _0x4b9e39(_0x2f51e0, [_0x102651[_0x1ca3ce(240)]], true)
        addCmd(_0x203d41.slice(1), 1, commund), _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'setwelcome':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              ' *teks_welcome*\n\n_Contoh_\n\n' +
              _0x203d41 +
              _0x1ca3ce(574)
          )
        }
        if (isSetWelcome(_0x43727e, _0x1fd5f2)) {
          return _0x358c06('Set Welcome already active')
        }
        addSetWelcome(_0x44ac49, _0x43727e, _0x1fd5f2),
          _0x358c06('Successfully Set text Welcome!'),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(437):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              ' *teks_welcome*\n\n_Contoh_\n\n' +
              _0x203d41 +
              _0x1ca3ce(574)
          )
        }
        changeSetWelcome(_0x44ac49, _0x43727e, _0x1fd5f2),
          _0x358c06(_0x1ca3ce(1397)),
          addCmd(_0x203d41.slice(1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(819):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!isSetWelcome(_0x43727e, _0x1fd5f2)) {
          return _0x358c06(_0x1ca3ce(1071) + _0x1d56ef + 'setwelcome')
        }
        removeSetWelcome(_0x43727e, _0x1fd5f2),
          _0x358c06(_0x1ca3ce(1069)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1348):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!isSetWelcome(_0x43727e, _0x1fd5f2)) {
          return _0x358c06(
            'Welcome Belum Di Setting\nSilahkan Ketik ' +
              _0x1d56ef +
              _0x1ca3ce(1276)
          )
        }
        _0x358c06('*TEXT WELCOME*\n' + getTextSetWelcome(_0x43727e, _0x1fd5f2)),
          addCmd(_0x203d41.slice(1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(453):
        {
          _0x358c06(_0x1ca3ce(506) + _0x379ca5[_0x1ca3ce(580)] + '*')
        }
        break
      case _0x1d56ef + _0x1ca3ce(1007):
      case _0x1d56ef + _0x1ca3ce(1225):
      case _0x1d56ef + 'dana':
      case _0x1d56ef + 'ovo':
        {
          _0x358c06('_(coming soon)_')
        }
        break
      case _0x1d56ef + _0x1ca3ce(1359):
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              _0x1ca3ce(1479) +
              _0x203d41 +
              _0x1ca3ce(782)
          )
        }
        if (isSetLeft(_0x43727e, _0x5b0c1e)) {
          return _0x358c06(_0x1ca3ce(478))
        }
        addSetLeft(_0x44ac49, _0x43727e, _0x5b0c1e),
          _0x358c06('Successfully Set text Left!'),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1220):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              _0x1ca3ce(1479) +
              _0x203d41 +
              ' Sayonara @user\nTelah Meninggalkan Grup @group\n'
          )
        }
        changeSetLeft(_0x44ac49, _0x43727e, _0x5b0c1e),
          _0x358c06(_0x1ca3ce(380)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(623):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!isSetLeft(_0x43727e, _0x5b0c1e)) {
          return _0x358c06(_0x1ca3ce(1071) + _0x1d56ef + _0x1ca3ce(1276))
        }
        removeSetLeft(_0x43727e, _0x5b0c1e),
          _0x358c06(_0x1ca3ce(509)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1253):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        if (!isSetLeft(_0x43727e, _0x5b0c1e)) {
          return _0x358c06(_0x1ca3ce(1071) + _0x1d56ef + _0x1ca3ce(1276))
        }
        _0x358c06(_0x1ca3ce(375) + getTextSetLeft(_0x43727e, _0x5b0c1e)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1510):
      case _0x1d56ef + _0x1ca3ce(1159):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              _0x1ca3ce(1062) +
              _0x203d41 +
              _0x1ca3ce(1256)
          )
        }
        if (isSetProses(_0x43727e, _0x58fe33)) {
          return _0x358c06(_0x1ca3ce(683))
        }
        addSetProses(_0x44ac49, _0x43727e, _0x58fe33),
          _0x358c06(_0x1ca3ce(1494)),
          addCmd(_0x203d41.slice(1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'changeproses':
      case _0x1d56ef + _0x1ca3ce(1206):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x44ac49) {
          return _0x358c06(
            'Gunakan dengan cara ' +
              _0x203d41 +
              _0x1ca3ce(1062) +
              _0x203d41 +
              _0x1ca3ce(1256)
          )
        }
        isSetProses(_0x43727e, _0x58fe33)
          ? (changeSetProses(_0x44ac49, _0x43727e, _0x58fe33),
            _0x358c06(_0x1ca3ce(608)))
          : (addSetProses(_0x44ac49, _0x43727e, _0x58fe33),
            _0x358c06(_0x1ca3ce(608)))
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1410):
      case _0x1d56ef + 'delsetp':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!isSetProses(_0x43727e, _0x58fe33)) {
          return _0x358c06(_0x1ca3ce(1183))
        }
        removeSetProses(_0x43727e, _0x58fe33),
          _0x358c06(_0x1ca3ce(786)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'setdone':
      case _0x1d56ef + _0x1ca3ce(251):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              _0x1ca3ce(1386) +
              _0x203d41 +
              _0x1ca3ce(1095)
          )
        }
        if (isSetDone(_0x43727e, _0x18390a)) {
          return _0x358c06(_0x1ca3ce(927))
        }
        addSetDone(_0x44ac49, _0x43727e, _0x18390a),
          _0x358c06(_0x1ca3ce(974)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'changedone':
      case _0x1d56ef + _0x1ca3ce(289):
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              _0x1ca3ce(1386) +
              _0x203d41 +
              ' pesanan @pesan, tag orang @nama\n\nList Opts : tanggal/jam'
          )
        }
        isSetDone(_0x43727e, _0x18390a)
          ? (changeSetDone(_0x44ac49, _0x43727e, _0x18390a),
            _0x358c06(_0x1ca3ce(1376)))
          : (addSetDone(_0x44ac49, _0x43727e, _0x18390a),
            _0x358c06(_0x1ca3ce(1376)))
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1520):
      case _0x1d56ef + 'delsetd':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!isSetDone(_0x43727e, _0x18390a)) {
          return _0x358c06('Belum ada set done di sini..')
        }
        removeSetDone(_0x43727e, _0x18390a),
          _0x358c06(_0x1ca3ce(1026)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'linkgrup':
      case _0x1d56ef + _0x1ca3ce(538):
      case _0x1d56ef + _0x1ca3ce(654):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        var _0x44563e = await _0x3a28a5[_0x1ca3ce(316)](_0x43727e).catch(() =>
          _0x358c06(mess[_0x1ca3ce(1181)][_0x1ca3ce(1175)])
        )
        ;(_0x44563e = 'https://chat.whatsapp.com/' + _0x44563e),
          _0x358c06(_0x44563e),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'setppgrup':
      case _0x1d56ef + _0x1ca3ce(1271):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess.BotAdmin)
        }
        if (_0x5bdc7d || _0x34d44d) {
          var _0x3eadb3 = await _0x51e6e4(
            'image',
            _0x1ca3ce(708) + _0x43727e + '.jpeg'
          )
          if (_0x430466[1] == _0x1ca3ce(896)) {
            var { img: _0x4cfa3b } = await generateProfilePicture(_0x3eadb3)
            await _0x3a28a5[_0x1ca3ce(1314)]({
              tag: 'iq',
              attrs: {
                to: _0x43727e,
                type: _0x1ca3ce(1281),
                xmlns: _0x1ca3ce(1103),
              },
              content: [
                {
                  tag: 'picture',
                  attrs: { type: _0x1ca3ce(702) },
                  content: _0x4cfa3b,
                },
              ],
            })
            fs.unlinkSync(_0x3eadb3)
            _0x358c06(_0x1ca3ce(479))
          } else {
            await _0x3a28a5[_0x1ca3ce(1444)](_0x43727e, { url: _0x3eadb3 })
              [_0x1ca3ce(1298)]((_0x2d94c1) => {
                _0x358c06('Sukses')
                fs.unlinkSync(_0x3eadb3)
              })
              .catch(() => _0x358c06(mess[_0x1ca3ce(1181)][_0x1ca3ce(1175)]))
          }
        } else {
          _0x358c06(_0x1ca3ce(1172) + _0x203d41)
        }
        addCmd(_0x203d41.slice(1), 1, commund), _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'setnamegrup':
      case _0x1d56ef + _0x1ca3ce(903):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        if (_0x430466.length < 2) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              ' *text*\n\n_Contoh_\n\n' +
              _0x203d41 +
              _0x1ca3ce(672) +
              _0x55ad61
          )
        }
        await _0x3a28a5[_0x1ca3ce(482)](_0x43727e, _0x44ac49)
          [_0x1ca3ce(1298)]((_0x864a78) => {
            var _0x1cd5bc = _0x1ca3ce
            _0x358c06(_0x1cd5bc(479))
          })
          [_0x1ca3ce(233)](() => _0x358c06(mess[_0x1ca3ce(1181)].api)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'setdesc':
      case _0x1d56ef + 'setdescription':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        if (_0x430466[_0x1ca3ce(676)] < 2) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              ' *text*\n\n_Contoh_\n\n' +
              _0x203d41 +
              _0x1ca3ce(1258) +
              _0x55ad61
          )
        }
        await _0x3a28a5[_0x1ca3ce(745)](_0x43727e, _0x44ac49)
          [_0x1ca3ce(1298)]((_0x567cf4) => {
            _0x358c06('Sukses')
          })
          [_0x1ca3ce(233)](() => _0x358c06(mess.error.api)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1060):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        if (_0x430466[_0x1ca3ce(676)] === 1) {
          return _0x358c06(_0x1ca3ce(716) + _0x203d41 + _0x1ca3ce(1484))
        }
        if (_0x430466[1][_0x1ca3ce(1231)]() === 'on') {
          if (_0x21591f) {
            return _0x358c06(_0x1ca3ce(1100))
          }
          antilink.push(_0x43727e)
          fs.writeFileSync(
            './database/antilink.json',
            JSON[_0x1ca3ce(1307)](antilink, null, 2)
          )
          _0x358c06(_0x1ca3ce(664))
        } else {
          if (_0x430466[1][_0x1ca3ce(1231)]() === _0x1ca3ce(1015)) {
            if (!_0x21591f) {
              return _0x358c06(_0x1ca3ce(238))
            }
            antilink.splice(_0x1ba3c8, 1)
            fs[_0x1ca3ce(1512)](
              './database/antilink.json',
              JSON[_0x1ca3ce(1307)](antilink, null, 2)
            )
            _0x358c06('Successfully Disabling Antilink In This Group')
          } else {
            _0x358c06(_0x1ca3ce(716) + _0x203d41 + _0x1ca3ce(1484))
          }
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(747):
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        if (_0x430466[_0x1ca3ce(676)] === 1) {
          return _0x358c06(_0x1ca3ce(716) + _0x203d41 + _0x1ca3ce(1484))
        }
        if (_0x430466[1][_0x1ca3ce(1231)]() === 'on') {
          if (_0x394c62) {
            return _0x358c06(_0x1ca3ce(1100))
          }
          antiwame.push(_0x43727e)
          fs.writeFileSync(
            _0x1ca3ce(1094),
            JSON[_0x1ca3ce(1307)](antiwame, null, 2)
          )
          _0x358c06(_0x1ca3ce(490))
        } else {
          if (_0x430466[1][_0x1ca3ce(1231)]() === _0x1ca3ce(1015)) {
            if (!_0x394c62) {
              return _0x358c06(_0x1ca3ce(238))
            }
            antiwame.splice(_0x528b1e, 1)
            fs[_0x1ca3ce(1512)](
              _0x1ca3ce(1094),
              JSON[_0x1ca3ce(1307)](antiwame, null, 2)
            )
            _0x358c06(_0x1ca3ce(684))
          } else {
            _0x358c06('Pilih on atau off\n_Contoh :_\n' + _0x203d41 + ' on')
          }
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(356):
        {
          if (!_0x2e401c) {
            return _0x358c06(mess[_0x1ca3ce(1398)])
          }
          fs[_0x1ca3ce(1512)](
            _0x1ca3ce(912),
            JSON[_0x1ca3ce(1307)](hitbot, null, 2)
          )
          var _0x417981 = '[]'
          hitbot[_0x1ca3ce(953)](_0x417981)
          _0x358c06(_0x1ca3ce(938))
        }
        break
      case _0x1d56ef + 'resetuser':
        {
          if (!_0x2e401c) {
            return _0x358c06(mess[_0x1ca3ce(1398)])
          }
          fs.writeFileSync(
            './database/user.json',
            JSON[_0x1ca3ce(1307)](pendaftar, null, 2)
          )
          var _0x417981 = '[]'
          pendaftar[_0x1ca3ce(953)](_0x417981)
          _0x358c06(_0x1ca3ce(1402))
        }
        break
      case _0x1d56ef + _0x1ca3ce(881):
        {
          if (!_0x2e401c) {
            return _0x358c06(mess[_0x1ca3ce(1398)])
          }
          var _0x417981 = '[]'
          db_close_group[_0x1ca3ce(953)](_0x417981)
          daftar[_0x1ca3ce(953)](_0x417981)
          commund.splice(_0x417981)
          hitbot[_0x1ca3ce(953)](_0x417981)
          pendaftar[_0x1ca3ce(953)](_0x417981)
          _0xeb8e3c.splice(_0x417981)
          db_respon_group[_0x1ca3ce(953)](_0x417981)
          db_open_group[_0x1ca3ce(953)](_0x417981)
          db_close_group[_0x1ca3ce(953)](_0x417981)
          glimit.splice(_0x417981)
          _money.splice(_0x417981)
          _0x358c06(_0x1ca3ce(1454))
        }
        break
      case _0x1d56ef + _0x1ca3ce(526):
        {
          if (!_0x2e401c) {
            return _0x358c06(mess[_0x1ca3ce(1398)])
          }
          fs[_0x1ca3ce(1512)](
            _0x1ca3ce(428),
            JSON.stringify(_0xeb8e3c, null, 2)
          )
          var _0x417981 = '[]'
          _0xeb8e3c[_0x1ca3ce(953)](_0x417981)
          _0x358c06('Successfully Reset List Group')
        }
        break
      case _0x1d56ef + _0x1ca3ce(888):
        {
          if (!_0x2e401c) {
            return _0x358c06(mess[_0x1ca3ce(1398)])
          }
          fs[_0x1ca3ce(1512)](
            _0x1ca3ce(297),
            JSON[_0x1ca3ce(1307)](db_respon_group, null, 2)
          )
          var _0x417981 = '[]'
          db_respon_group[_0x1ca3ce(953)](_0x417981)
          _0x358c06(_0x1ca3ce(568))
        }
        break
      case _0x1d56ef + _0x1ca3ce(1194):
        {
          if (!_0x2e401c) {
            return _0x358c06(mess.OnlyOwner)
          }
          fs[_0x1ca3ce(1512)](_0x1ca3ce(1193), JSON.stringify(glimit, null, 2))
          var _0x417981 = '[]'
          glimit[_0x1ca3ce(953)](_0x417981)
          _0x358c06('Successfully Reset Global Game')
        }
        break
      case _0x1d56ef + _0x1ca3ce(641):
        {
          if (!_0x2e401c) {
            return _0x358c06(mess[_0x1ca3ce(1398)])
          }
          fs.writeFileSync(_0x1ca3ce(333), JSON.stringify(_money, null, 2))
          var _0x417981 = '[]'
          _money[_0x1ca3ce(953)](_0x417981)
          _0x358c06('Successfully Reset Balance Global')
        }
        break
      case _0x1d56ef + _0x1ca3ce(1311):
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (_0x430466.length < 2) {
          return _0x358c06(
            '*Example :*\n' +
              _0x203d41 +
              _0x1ca3ce(217) +
              _0x203d41 +
              _0x1ca3ce(496)
          )
        }
        if (_0x430466[1][_0x1ca3ce(1231)]() === 'on') {
          if (_0x4e8fef) {
            return _0x358c06(_0x1ca3ce(1462))
          }
          _0x16a9ea.push(_0x43727e)
          fs[_0x1ca3ce(1512)](
            _0x1ca3ce(1039),
            JSON[_0x1ca3ce(1307)](_0x16a9ea, null, 2)
          )
          _0x358c06(_0x1ca3ce(1419))
        } else {
          if (_0x430466[1][_0x1ca3ce(1231)]() === _0x1ca3ce(1015)) {
            if (!_0x4e8fef) {
              return _0x358c06(_0x1ca3ce(412))
            }
            var _0x2cab05 = _0x16a9ea.indexOf(_0x43727e)
            _0x16a9ea[_0x1ca3ce(953)](_0x2cab05, 1)
            fs[_0x1ca3ce(1512)](
              _0x1ca3ce(1039),
              JSON[_0x1ca3ce(1307)](_0x16a9ea, null, 2)
            )
            _0x358c06(_0x1ca3ce(541))
          } else {
            _0x358c06(_0x1ca3ce(716) + _0x203d41 + _0x1ca3ce(1484))
          }
        }
        addCmd(_0x203d41.slice(1), 1, commund), _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(996):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        if (_0x430466[_0x1ca3ce(676)] < 2) {
          return _0x358c06(
            _0x1ca3ce(1305) +
              _0x203d41 +
              _0x1ca3ce(217) +
              _0x203d41 +
              _0x1ca3ce(496)
          )
        }
        if (_0x430466[1][_0x1ca3ce(1231)]() === 'on') {
          if (_0x12c275) {
            return _0x358c06(_0x1ca3ce(739))
          }
          _0xde8119[_0x1ca3ce(383)](_0x43727e)
          fs[_0x1ca3ce(1512)](
            './database/left.json',
            JSON[_0x1ca3ce(1307)](_0x16a9ea, null, 2)
          )
          _0x358c06(_0x1ca3ce(1102))
        } else {
          if (_0x430466[1][_0x1ca3ce(1231)]() === _0x1ca3ce(1015)) {
            if (!_0x12c275) {
              return _0x358c06('Left sudah dimatikan')
            }
            var _0x2cab05 = _0x16a9ea.indexOf(_0x43727e)
            _0xde8119.splice(_0x2cab05, 1)
            fs.writeFileSync(
              _0x1ca3ce(373),
              JSON[_0x1ca3ce(1307)](_0x16a9ea, null, 2)
            )
            _0x358c06(_0x1ca3ce(771))
          } else {
            _0x358c06(_0x1ca3ce(716) + _0x203d41 + _0x1ca3ce(1484))
          }
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(292):
      case _0x1d56ef + 'buka':
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        _0x3a28a5[_0x1ca3ce(1406)](_0x43727e, 'not_announcement')
          .then((_0x35462f) => {
            var _0x40cddf = _0x1ca3ce
            const _0x50d2b7 = getTextSetOpen(_0x43727e, db_open_group)
            _0x50d2b7 !== undefined
              ? _0x358c06(_0x50d2b7)
              : _0x358c06(_0x40cddf(900))
          })
          [_0x1ca3ce(233)]((_0x5787f4) => _0x358c06(_0x1ca3ce(628))),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'close':
      case _0x1d56ef + _0x1ca3ce(799):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        _0x3a28a5
          .groupSettingUpdate(_0x43727e, 'announcement')
          [_0x1ca3ce(1298)]((_0x32e9ab) => {
            var _0x2b5965 = _0x1ca3ce
            const _0x4cfe39 = getTextSetClose(_0x43727e, db_close_group)
            _0x4cfe39 !== undefined
              ? _0x358c06(_0x4cfe39)
              : _0x358c06(_0x2b5965(1216))
          })
          [_0x1ca3ce(233)]((_0x7aa5eb) => _0x358c06(_0x1ca3ce(628))),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(873):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037) {
          return _0x358c06(mess.GrupAdmin)
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        if (_0x1695ed[_0x1ca3ce(676)] == 257) {
          return _0x358c06(_0x1ca3ce(1020))
        }
        var _0x1c100b = []
        _0x1695ed[_0x1ca3ce(1006)]((_0x8daa1b) => _0x1c100b.push(_0x8daa1b.id))
        var _0x16f598
        if (_0x430466[_0x1ca3ce(676)] > 1) {
          _0x16f598 =
            _0x44ac49[_0x1ca3ce(1201)](/[^0-9]/gi, '') + _0x1ca3ce(917)
          var _0xf4022d = await _0x3a28a5[_0x1ca3ce(276)](_0x16f598)
          if (_0xf4022d[_0x1ca3ce(676)] == 0) {
            return _0x358c06(_0x1ca3ce(1369))
          }
          if (_0x1c100b[_0x1ca3ce(1111)](_0x16f598)) {
            return _0x358c06(_0x1ca3ce(965))
          }
          _0x3a28a5
            .groupParticipantsUpdate(_0x43727e, [_0x16f598], _0x1ca3ce(873))
            [_0x1ca3ce(1298)]((_0x57cdf8) => _0x358c06(_0x193f47(_0x57cdf8)))
            [_0x1ca3ce(233)]((_0x56792d) => _0x358c06(_0x193f47(_0x56792d)))
        } else {
          if (_0x1aa604) {
            _0x16f598 = _0x102651[_0x1ca3ce(240)]
            var _0xf4022d = await _0x3a28a5[_0x1ca3ce(276)](_0x16f598)
            if (_0xf4022d[_0x1ca3ce(676)] == 0) {
              return _0x358c06(_0x1ca3ce(1155))
            }
            if (_0x1c100b[_0x1ca3ce(1111)](_0x16f598)) {
              return _0x358c06(_0x1ca3ce(965))
            }
            _0x3a28a5[_0x1ca3ce(1002)](_0x43727e, [_0x16f598], _0x1ca3ce(873))
              .then((_0x1b61ed) => _0x358c06(_0x193f47(_0x1b61ed)))
              [_0x1ca3ce(233)]((_0x3e3d5d) => _0x358c06(_0x193f47(_0x3e3d5d)))
          } else {
            _0x358c06(_0x1ca3ce(1270) + _0x203d41 + _0x1ca3ce(1456))
          }
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1215):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        var _0x16f598
        if (_0x50fa1b[_0x1ca3ce(676)] !== 0) {
          _0x16f598 = _0x50fa1b[0]
          _0x3a28a5[_0x1ca3ce(1002)](_0x43727e, [_0x16f598], 'remove')
            [_0x1ca3ce(1298)]((_0x5f181d) => _0x358c06(_0x193f47(_0x5f181d)))
            [_0x1ca3ce(233)]((_0x29b452) => _0x358c06(_0x193f47(_0x29b452)))
        } else {
          _0x1aa604
            ? ((_0x16f598 = _0x102651[_0x1ca3ce(240)]),
              _0x3a28a5[_0x1ca3ce(1002)](_0x43727e, [_0x16f598], 'remove')
                [_0x1ca3ce(1298)]((_0x4de91d) =>
                  _0x358c06(_0x193f47(_0x4de91d))
                )
                [_0x1ca3ce(233)]((_0x191c23) =>
                  _0x358c06(_0x193f47(_0x191c23))
                ))
            : _0x358c06(_0x1ca3ce(1037))
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'promote':
      case _0x1d56ef + 'pm':
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess.BotAdmin)
        }
        if (_0x50fa1b.length !== 0) {
          _0x3a28a5[_0x1ca3ce(1002)](_0x43727e, [_0x50fa1b[0]], _0x1ca3ce(928))
            [_0x1ca3ce(1298)]((_0x29a1de) => {
              var _0x408bb9 = _0x1ca3ce
              _0x4b9e39(
                _0x408bb9(455) +
                  _0x50fa1b[0][_0x408bb9(760)]('@')[0] +
                  _0x408bb9(801),
                [_0x50fa1b[0]],
                true
              )
            })
            [_0x1ca3ce(233)](() => _0x358c06(mess.error[_0x1ca3ce(1175)]))
        } else {
          _0x1aa604
            ? _0x3a28a5
                .groupParticipantsUpdate(
                  _0x43727e,
                  [_0x102651[_0x1ca3ce(240)]],
                  _0x1ca3ce(928)
                )
                [_0x1ca3ce(1298)]((_0x42254f) => {
                  var _0x37ba30 = _0x1ca3ce
                  _0x4b9e39(
                    _0x37ba30(455) +
                      _0x102651[_0x37ba30(240)][_0x37ba30(760)]('@')[0] +
                      ' sebagai admin',
                    [_0x102651[_0x37ba30(240)]],
                    true
                  )
                })
                .catch(() => _0x358c06(mess.error[_0x1ca3ce(1175)]))
            : _0x358c06(_0x1ca3ce(1483))
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'demote':
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess[_0x1ca3ce(954)])
        }
        if (_0x50fa1b.length !== 0) {
          _0x3a28a5
            .groupParticipantsUpdate(_0x43727e, [_0x50fa1b[0]], _0x1ca3ce(527))
            .then((_0xeafc3d) => {
              var _0xd3ecc7 = _0x1ca3ce
              _0x4b9e39(
                _0xd3ecc7(455) + _0x50fa1b[0].split('@')[0] + _0xd3ecc7(378),
                [_0x50fa1b[0]],
                true
              )
            })
            [_0x1ca3ce(233)](() => _0x358c06(mess[_0x1ca3ce(1181)].api))
        } else {
          _0x1aa604
            ? _0x3a28a5[_0x1ca3ce(1002)](
                _0x43727e,
                [_0x102651[_0x1ca3ce(240)]],
                _0x1ca3ce(527)
              )
                [_0x1ca3ce(1298)]((_0x320b64) => {
                  var _0x2152e0 = _0x1ca3ce
                  _0x4b9e39(
                    _0x2152e0(455) +
                      _0x102651[_0x2152e0(240)][_0x2152e0(760)]('@')[0] +
                      _0x2152e0(378),
                    [_0x102651[_0x2152e0(240)]],
                    true
                  )
                })
                [_0x1ca3ce(233)](() => _0x358c06(mess.error.api))
            : _0x358c06(_0x1ca3ce(1262))
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(929):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x20ae58) {
          return _0x358c06(mess.BotAdmin)
        }
        await _0x3a28a5[_0x1ca3ce(359)](_0x43727e)
          [_0x1ca3ce(1298)]((_0x4e8677) => {
            _0x358c06('Sukses menyetel tautan undangan grup ini')
          })
          .catch(() => _0x358c06(mess[_0x1ca3ce(1181)][_0x1ca3ce(1175)])),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1161):
        {
          if (!_0x25e638) {
            return _0x358c06(mess[_0x1ca3ce(1063)])
          }
          if (!_0x182037 && !_0x2e401c) {
            return _0x358c06(mess[_0x1ca3ce(719)])
          }
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(494))
          }
          for (let _0x386e17 of _0x3794df) {
            _0x9eb9a += '\u27B2 @' + _0x386e17.id[_0x1ca3ce(760)]('@')[0] + '\n'
          }
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              text: _0x9eb9a,
              mentions: _0x3794df[_0x1ca3ce(1006)]((_0x4230c7) => _0x4230c7.id),
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(441):
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        _0x1695ed[_0x1ca3ce(1006)]((_0x285b83) =>
          _0x3134f3[_0x1ca3ce(383)](_0x285b83.id)
        ),
          _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
            text: _0x44ac49 ? _0x44ac49 : '',
            mentions: _0x3134f3,
          }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'delete':
      case _0x1d56ef + _0x1ca3ce(992):
      case _0x1d56ef + 'd':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x1aa604) {
          return _0x358c06('Balas chat dari bot yang ingin dihapus')
        }
        if (!_0x102651[_0x1ca3ce(1364)]) {
          return _0x358c06('Hanya bisa menghapus chat dari bot')
        }
        _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
          delete: {
            fromMe: true,
            id: _0x102651.id,
            remoteJid: _0x43727e,
          },
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(724):
        if (!_0x2e401c && !_0x1423f9) {
          return _0x358c06(mess[_0x1ca3ce(1398)])
        }
        exif[_0x1ca3ce(1449)](_0x577edc, _0x3bc268),
          _0x358c06(_0x1ca3ce(1473)),
          addCmd(_0x203d41.slice(1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1034):
        if (!_0x2a8612) {
          return _0x358c06(_0x1ca3ce(677) + _0x1d56ef + _0x1ca3ce(275))
        }
        if (!_0x2e401c && !_0x1423f9) {
          return _0x358c06(mess.OnlyOwner)
        }
        if (_0x430466[_0x1ca3ce(676)] < 2) {
          return _0x358c06(_0x1ca3ce(1270) + _0x203d41 + _0x1ca3ce(1126))
        }
        if (!_0xdd3a35(_0x430466[1])) {
          return _0x358c06(mess[_0x1ca3ce(1181)].Iv)
        }
        var _0x44563e = _0x430466[1]
        _0x44563e = _0x44563e.split(_0x1ca3ce(1097))[1]
        var _0x23016c = await _0x3a28a5[_0x1ca3ce(313)](_0x44563e)
        _0x358c06(_0x193f47(_0x23016c)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'leave':
        if (!_0x2e401c && !_0x1423f9) {
          return _0x358c06(mess.OnlyOwner)
        }
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        _0x3a28a5.groupLeave(_0x43727e),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1413):
        {
          if (!_0x2e401c && !_0x1423f9) {
            return _0x358c06(mess.OnlyOwner)
          }
          _0x3a28a5[_0x1ca3ce(1511)] = _0x1ca3ce(1413)
          _0x358c06(_0x1ca3ce(1316))
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'publik':
      case _0x1d56ef + 'public':
        {
          if (!_0x2e401c && !_0x1423f9) {
            return _0x358c06(mess[_0x1ca3ce(1398)])
          }
          _0x3a28a5.mode = _0x1ca3ce(352)
          _0x358c06('Berhasil berubah ke mode public')
        }
        addCmd(_0x203d41.slice(1), 1, commund), _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1342):
        _0x358c06(_0x557db3), addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(569):
        _0x358c06(_0x4bf628)
        break
      case _0x1d56ef + 'donasi':
      case _0x1d56ef + 'donate':
        _0x358c06(_0x56650e)
        break
      case _0x1d56ef + _0x1ca3ce(1051):
      case _0x1d56ef + 'sendsesi':
      case _0x1d56ef + _0x1ca3ce(1310):
        if (!_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(1398)])
        }
        var _0x52beea = JSON[_0x1ca3ce(1265)](fs.readFileSync(_0x1ca3ce(539)))
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          {
            document: _0x2bdc83,
            mimetype: 'document/application',
            fileName: 'session.json',
          },
          { quoted: _0x1b0526 }
        ),
          _0x358c06(_0x1ca3ce(598)),
          _0x358c06(_0x1ca3ce(998) + _0x52beea.sessionName + _0x1ca3ce(305)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1ca3ce(294):
        _0x358c06(_0x1ca3ce(244) + _0x5781b2[_0x1ca3ce(760)]('@')[0])
        break
      case _0x1ca3ce(1204):
        _0x358c06(_0x1ca3ce(244) + _0x228102[_0x1ca3ce(760)]('@')[0])
        break
      case _0x1d56ef + 'setpp':
      case _0x1d56ef + _0x1ca3ce(1373):
        if (!_0x2e401c && !_0x1423f9) {
          return _0x358c06(mess.OnlyOwner)
        }
        if (_0x5bdc7d || _0x34d44d) {
          var _0x3eadb3 = await _0x51e6e4(_0x1ca3ce(702), _0x1ca3ce(808))
          if (_0x430466[1] == "'panjang'") {
            var { img: _0x4cfa3b } = await generateProfilePicture(_0x3eadb3)
            await _0x3a28a5.query({
              tag: 'iq',
              attrs: {
                to: _0x5781b2,
                type: _0x1ca3ce(1281),
                xmlns: 'w:profile:picture',
              },
              content: [
                {
                  tag: _0x1ca3ce(512),
                  attrs: { type: _0x1ca3ce(702) },
                  content: _0x4cfa3b,
                },
              ],
            })
            fs[_0x1ca3ce(681)](_0x3eadb3)
            _0x358c06(_0x1ca3ce(479))
          } else {
            var _0x23016c = await _0x3a28a5[_0x1ca3ce(1444)](_0x5781b2, {
              url: _0x3eadb3,
            })
            fs[_0x1ca3ce(681)](_0x3eadb3)
            _0x358c06('Sukses')
          }
        } else {
          _0x358c06(
            'Kirim/balas gambar dengan caption ' + _0x203d41 + _0x1ca3ce(424)
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'sc':
      case _0x1d56ef + 'script':
        {
          _0x358c06(
            '_Script ini Dijual 50k Minat Chat_\n*Wa.me/6283834558105 ( Lexxy )*\n*No Enc 100% Work All Fitur*\n\n50k 1\xD7 Update\n100k Premium'
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1162):
      case _0x1d56ef + 'stats':
      case _0x1d56ef + _0x1ca3ce(761):
        _0x358c06(_0x40f47b)
        break
      case _0x1d56ef + _0x1ca3ce(798):
      case _0x1d56ef + 'bc':
        if (!_0x2e401c && !_0x1423f9) {
          return _0x358c06(mess.OnlyOwner)
        }
        if (_0x430466.length < 2) {
          return _0x358c06(_0x1ca3ce(1270) + _0x203d41 + _0x1ca3ce(665))
        }
        var _0x23016c = await _0x5b4a25[_0x1ca3ce(1418)][_0x1ca3ce(1004)](),
          _0x54f673 = '' + _0x44ac49
        for (let _0xb79431 of _0x23016c) {
          _0x3a28a5[_0x1ca3ce(557)](_0xb79431.id, { text: _0x54f673 })
          await sleep(1000)
        }
        _0x358c06(
          'Sukses mengirim pesan siaran kepada ' +
            _0x23016c[_0x1ca3ce(676)] +
            _0x1ca3ce(1124)
        ),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(803):
        if (!_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(1398)])
        }
        if (!_0x44ac49) {
          return _0x358c06(_0x1ca3ce(1305) + _0x203d41 + _0x1ca3ce(561))
        }
        var _0x54f673 =
          '  \u300C *Create Group* \u300D\n\n_*\u25B8 Name : ' +
          _0x1d4977[_0x1ca3ce(1283)] +
          '*_\n_*\u25B8 Owner : @' +
          _0x1d4977[_0x1ca3ce(940)][_0x1ca3ce(760)]('@')[0] +
          _0x1ca3ce(1275) +
          moment(_0x1d4977.creation * 1000)
            .tz(_0x1ca3ce(386))
            [_0x1ca3ce(891)](_0x1ca3ce(335)) +
          _0x1ca3ce(1018) +
          _0x1d4262 +
          '\n'
        _0x358c06(_0x54f673),
          addCmd(_0x203d41.slice(1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(617):
      case _0x1d56ef + 'addrespon':
        if (_0x25e638) {
          return _0x358c06('Khusus Chat Pribadi Kak')
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        var _0x39182a = _0x44ac49[_0x1ca3ce(760)]('@')[0],
          _0x420555 = _0x44ac49[_0x1ca3ce(760)]('@')[1]
        if (!_0x44ac49[_0x1ca3ce(1111)]('@')) {
          return _0x358c06(
            _0x1ca3ce(615) +
              _0x203d41 +
              ' *key@response*\n\n_Contoh:_\n' +
              _0x203d41 +
              _0x1ca3ce(304)
          )
        }
        if (checkResponGroup(_0x43727e, _0x39182a, db_respon_group)) {
          return _0x358c06(
            'List respon dengan key : *' +
              _0x39182a +
              '* sudah ada di group ini.'
          )
        }
        addResponGroup(_0x43727e, _0x39182a, _0x420555, db_respon_group),
          _0x358c06(_0x1ca3ce(987) + _0x39182a + '*'),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1171):
      case _0x1d56ef + _0x1ca3ce(1022):
        if (_0x25e638) {
          return _0x358c06(_0x1ca3ce(432))
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        var _0x39182a = _0x44ac49
        if (db_respon_group[_0x1ca3ce(676)] === 0) {
          return _0x358c06(_0x1ca3ce(1421))
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              ' *key*\n\n_Contoh_\n\n' +
              _0x203d41 +
              _0x1ca3ce(443)
          )
        }
        if (!checkResponGroup(_0x43727e, _0x39182a, db_respon_group)) {
          return _0x358c06(_0x1ca3ce(288) + _0x39182a + _0x1ca3ce(1202))
        }
        deleteResponGroup(_0x43727e, _0x39182a, db_respon_group),
          _0x358c06(_0x1ca3ce(556) + _0x44ac49 + '*'),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(590):
      case _0x1d56ef + _0x1ca3ce(473):
        if (_0x25e638) {
          return _0x358c06(_0x1ca3ce(432))
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        var _0x39182a = _0x44ac49[_0x1ca3ce(760)]('@')[0],
          _0x420555 = _0x44ac49[_0x1ca3ce(760)]('@')[1]
        if (!_0x44ac49.includes('@')) {
          return _0x358c06(
            _0x1ca3ce(615) +
              _0x203d41 +
              _0x1ca3ce(1153) +
              _0x203d41 +
              _0x1ca3ce(304)
          )
        }
        if (checkResponGroup(_0x43727e, _0x44ac49, db_respon_group)) {
          return _0x358c06(
            _0x1ca3ce(288) + _0x44ac49 + '* tidak ada di database!'
          )
        }
        changeResponGroup(_0x43727e, _0x39182a, _0x420555, db_respon_group),
          _0x358c06('Berhasil mengubah Respon : *' + _0x39182a + '*'),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'setclose':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(730) +
              _0x203d41 +
              ' text\n\nContoh :\n' +
              _0x203d41 +
              _0x1ca3ce(1340)
          )
        }
        var _0x39182a = _0x44ac49
        addSetClose(_0x39182a, _0x43727e, db_close_group),
          _0x358c06(
            'Berhasil mengubah pesan group close menjadi : ' + _0x39182a
          ),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1244):
        if (!_0x25e638) {
          return _0x358c06(mess.OnlyGrup)
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        removeSetClose(_0x43727e, db_close_group),
          _0x358c06(_0x1ca3ce(1322)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1432):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        if (!isSetClose(_0x43727e, db_close_group)) {
          return _0x358c06(_0x1ca3ce(584) + _0x1d56ef + _0x1ca3ce(1174))
        }
        _0x358c06(_0x1ca3ce(328) + getTextSetClose(_0x43727e, db_close_group)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1500):
      case _0x1d56ef + 'cekrespon':
      case _0x1d56ef + _0x1ca3ce(959):
        {
          if (_0x25e638) {
            return _0x358c06(_0x1ca3ce(432))
          }
          if (db_respon_group[_0x1ca3ce(676)] === 0) {
            return _0x358c06(
              'Belum ada respon message di database\nSilahkan Ketik ' +
                _0x1d56ef +
                _0x1ca3ce(617)
            )
          }
          for (let _0x1dfdae of _0x25d0e2) {
            _0x1363e3 += _0x1ca3ce(831) + _0x1dfdae[_0x1ca3ce(503)] + '\n'
          }
          _0x358c06(_0x1363e3)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'setopen':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(730) +
              _0x203d41 +
              ' text\n\nContoh :\n' +
              _0x203d41 +
              _0x1ca3ce(1347)
          )
        }
        var _0x39182a = _0x44ac49
        addSetOpen(_0x39182a, _0x43727e, db_open_group),
          _0x358c06(_0x1ca3ce(1318) + _0x39182a),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(237):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess.GrupAdmin)
        }
        removeSetOpen(_0x43727e, db_open_group),
          _0x358c06('Sukses hapus pesan group open'),
          addCmd(_0x203d41.slice(1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(497):
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x182037 && !_0x2e401c) {
          return _0x358c06(mess[_0x1ca3ce(719)])
        }
        if (!isSetOpen(_0x43727e, db_open_group)) {
          return _0x358c06(_0x1ca3ce(476) + _0x1d56ef + _0x1ca3ce(1191))
        }
        _0x358c06(_0x1ca3ce(458) + getTextSetOpen(_0x43727e, db_open_group)),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(852):
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(779) + (_0x1d56ef + _0x203d41) + _0x1ca3ce(1382)
          )
        }
        fetchJson(_0x1ca3ce(1016) + _0x44ac49 + _0x1ca3ce(1294))[
          _0x1ca3ce(1298)
        ]((_0x4b282d) => {
          var _0x1333d9 = _0x1ca3ce
          _0x358c06(_0x4b282d[_0x1333d9(1114)])
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1415):
        {
          _0x358c06(_0x1ca3ce(413))
          console[_0x1ca3ce(1200)](_0x502589)
          if (!_0x1007e7) {
            return console.error(_0x1007e7)
          }
          console[_0x1ca3ce(1200)](_0x49837e)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x49837e.qr },
              caption: _0x468a2e,
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(439):
        {
          if (!_0x44ac49) {
            return _0x358c06(
              _0x1ca3ce(1471) +
                _0x203d41 +
                ' https://www.facebook.com/mhmd.farid.908/videos/473529950837803/'
            )
          }
          hikki[_0x1ca3ce(1065)]
            [_0x1ca3ce(1222)](_0x44ac49)
            [_0x1ca3ce(1298)]((_0x29cdf4) => {
              var _0x1388d8 = _0x1ca3ce
              _0x358c06(mess.wait)
              let _0x104fcb =
                _0x1388d8(1029) +
                _0x29cdf4[_0x1388d8(600)][_0x1388d8(395)] +
                _0x1388d8(1053) +
                _0x29cdf4[_0x1388d8(600)].url
              _0x3a28a5.sendMessage(
                _0x43727e,
                {
                  video: { url: _0x29cdf4[_0x1388d8(600)].hd },
                  caption: _0x104fcb,
                },
                { quoted: _0x1b0526 }
              )
            })
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'tiktok':
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1224) + _0x203d41 + _0x1ca3ce(1396))
          }
          var _0x44563e = _0x44ac49
          _0x358c06(mess[_0x1ca3ce(613)])
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              video: { url: _0xabdb7e.video[_0x1ca3ce(310)] },
              caption: _0x1ca3ce(853),
            },
            { quoted: _0x1b0526 }
          )
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              audio: { url: _0xabdb7e[_0x1ca3ce(331)][_0x1ca3ce(1068)] },
              mimetype: 'audio/mpeg',
              fileName: _0xabdb7e[_0x1ca3ce(395)] + _0x1ca3ce(460),
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1513):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(592))
          }
          hikki[_0x1ca3ce(1065)]
            [_0x1ca3ce(507)](_0x44ac49)
            .then((_0x4cf859) => {
              var _0xf61a5c = _0x1ca3ce
              console.log(_0x4cf859)
              let _0x4e17f2 =
                _0xf61a5c(658) +
                _0x4cf859[_0xf61a5c(1518)] +
                _0xf61a5c(701) +
                _0x4cf859[_0xf61a5c(642)][0].videoAvailable +
                '\nAudio : ' +
                _0x4cf859[_0xf61a5c(642)][0][_0xf61a5c(882)]
              _0x358c06(_0x4e17f2)
              let _0x114373 =
                _0xf61a5c(1184) +
                _0x4cf859[_0xf61a5c(667)] +
                _0xf61a5c(485) +
                _0x4cf859[_0xf61a5c(642)][0].quality +
                _0xf61a5c(1384) +
                _0x4cf859[_0xf61a5c(642)][0].extension +
                '\nformattedSize : ' +
                _0x4cf859[_0xf61a5c(642)][0].formattedSize +
                _0xf61a5c(264) +
                _0x4cf859[_0xf61a5c(642)][0].videoAvailable +
                _0xf61a5c(1188) +
                _0x4cf859[_0xf61a5c(642)][0].audioAvailable +
                '\nchunked : ' +
                _0x4cf859.medias[0][_0xf61a5c(493)] +
                _0xf61a5c(1083) +
                _0x4cf859[_0xf61a5c(1518)]
              _0x358c06(mess.wait)
              _0x3a28a5[_0xf61a5c(557)](
                _0x43727e,
                {
                  video: { url: _0x4cf859[_0xf61a5c(642)][0][_0xf61a5c(667)] },
                  caption: _0x114373,
                },
                { quoted: _0x1b0526 }
              )
              _0x3a28a5[_0xf61a5c(557)](
                _0x43727e,
                {
                  audio: { url: _0x4cf859.medias[0][_0xf61a5c(667)] },
                  mimetype: 'audio/mpeg',
                  fileName: _0x4cf859[_0xf61a5c(395)] + '.mp3',
                },
                { quoted: _0x1b0526 }
              )
            })
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'gsmarena':
        {
          if (!_0x44ac49) {
            return _0x358c06(
              _0x1ca3ce(1254) + (_0x1d56ef + _0x203d41) + _0x1ca3ce(972)
            )
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x116c07,
              caption: _0x4397a7,
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(347):
        {
          if (!_0x44ac49) {
            return _0x358c06(
              '*Contoh :*\n' + (_0x1d56ef + _0x203d41) + _0x1ca3ce(797)
            )
          }
          _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
            text:
              _0x1ca3ce(1365) +
              _0x44ac49 +
              _0x1ca3ce(1319) +
              _0x3044b7[_0x1ca3ce(600)],
            quoted: _0x1b0526,
          })
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(856):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1471) + _0x203d41 + _0x1ca3ce(1496))
          }
          _0x3a28a5[_0x1ca3ce(557)](_0x43727e, {
            text:
              _0x1ca3ce(1365) +
              _0x44ac49 +
              _0x1ca3ce(1319) +
              _0x371dc4[_0x1ca3ce(600)][_0x1ca3ce(538)],
            quoted: _0x1b0526,
          })
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1522):
        {
          if (!_0x44ac49) {
            return _0x358c06('*Contoh :*\n' + _0x203d41 + ' http://google.com')
          }
          _0x3a28a5.sendMessage(_0x43727e, {
            text:
              _0x1ca3ce(1365) +
              _0x44ac49 +
              _0x1ca3ce(1319) +
              _0x13a4ee[_0x1ca3ce(600)][_0x1ca3ce(538)],
            quoted: _0x1b0526,
          })
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(967):
        _0x358c06(
          '*DAFTAR_STASIUN*\nrcti\nnettv\nantv\ngtv\nindosiar\ninewstv\nkompastv\nmetrotv\nmnctv\nrtv\nsctv\ntrans7\ntranstv\ntvone\ntvri'
        )
        break
      case _0x1d56ef + 'jadwaltv':
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(1501) + _0x203d41 + _0x1ca3ce(1478))
          }
          var _0x5bb989 = await fetchJson(
            'http://nzcha-apii.herokuapp.com/jadwaltv?channel=' + _0x44ac49
          )
          if (_0x5bb989[_0x1ca3ce(227)]) {
            return _0x358c06(_0x1ca3ce(431) + _0x1d56ef + 'salurantv')
          }
          _0x54f673 =
            _0x1ca3ce(868) +
            _0x44ac49 +
            '\nJumlah Siaran : ' +
            _0x5bb989[_0x1ca3ce(1248)] +
            '\n\n'
          for (let _0x4c9ad8 of _0x5bb989.result) {
            _0x54f673 +=
              _0x1ca3ce(1122) +
              _0x4c9ad8.jam +
              '\ntayang : ' +
              _0x4c9ad8[_0x1ca3ce(1287)] +
              '\n\n'
          }
          _0x358c06(_0x54f673)
        }
        break
      case _0x1d56ef + _0x1ca3ce(528):
        {
          if (!_0x44ac49) {
            return _0x358c06('*Contoh :*\n' + _0x203d41 + ' http://google.com')
          }
          if (_0x34d6a2[_0x1ca3ce(562)]) {
            return _0x358c06(_0x1ca3ce(644))
          }
          _0x358c06(_0x34d6a2[_0x1ca3ce(600)])
        }
        break
      case _0x1d56ef + 'id':
        _0x358c06(_0x43727e),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'y':
        {
          _0x3a28a5[_0x1ca3ce(1324)](_0x43727e, _0x58f09c[_0x1ca3ce(754)], {
            messageId: _0x58f09c[_0x1ca3ce(503)].id,
          })
        }
        break
      case _0x1d56ef + 'topupff':
        {
          if (!_0x44ac49) {
            return _0x358c06(
              _0x1ca3ce(1305) +
                _0x203d41 +
                _0x1ca3ce(360) +
                _0x203d41 +
                ' 239814337'
            )
          }
          var _0x17ffbf = _0xb6e1d1[_0x1ca3ce(284)](9)
          for (let _0x41f178 of _0x16d3eb) {
            const _0x2e5ed2 = {
              title: _0x1ca3ce(579) + _0x4ceea0++,
              rows: [
                {
                  title: '' + _0x46815f[_0x5d5c6b++],
                  description: '' + _0x219e4e[_0x3f33ed],
                  rowId: '' + _0x1d56ef + _0x41f178,
                },
              ],
            }
            _0x32021c[_0x1ca3ce(383)](_0x2e5ed2)
          }
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'tp1':
        if (!_0x44ac49) {
          return _0x358c06(
            _0x1ca3ce(1305) +
              _0x203d41 +
              _0x1ca3ce(621) +
              _0x203d41 +
              ' 239814337|70\n\n_Support Nominal_ :\n5 12 70 140 355 720'
          )
        }
        var _0x339faa = _0x44ac49,
          _0x17ffbf = _0x339faa[_0x1ca3ce(760)]('|')[0]
        _0x358c06(mess.wait)
        async function _0x42eb48() {
          var _0x5b062d = _0x1ca3ce
          const _0x408e0c = await hikki[_0x5b062d(1379)][_0x5b062d(830)](
            _0x17ffbf,
            _0x1f61cf
          )
          let _0x2bb7a2 = _0x408e0c[_0x5b062d(1455)][_0x5b062d(1073)],
            _0x16207c = _0x408e0c[_0x5b062d(1455)][_0x5b062d(1457)],
            _0x52da91 = _0x408e0c[_0x5b062d(1455)][_0x5b062d(867)],
            _0x5f5b51 = _0x408e0c[_0x5b062d(1455)][_0x5b062d(382)],
            _0x1b00d1 = _0x408e0c.data[_0x5b062d(1467)][_0x5b062d(1325)]
          var _0x23e499 =
              _0x5b062d(970) +
              _0x17ffbf +
              _0x5b062d(839) +
              _0x16207c +
              _0x5b062d(1288) +
              _0x1b00d1 +
              '* \uD83D\uDC8E\n\uD83D\uDCB8 *Payment : ' +
              _0x2bb7a2 +
              _0x5b062d(366) +
              _0x52da91 +
              _0x5b062d(1337) +
              _0x5f5b51 +
              '*\n',
            _0x24ce40 = _0x5b062d(711),
            _0x24caa1 = await getBuffer(_0x5b062d(1490))
          return (
            _0x3a28a5[_0x5b062d(557)](_0x43727e, {
              caption: _0x23e499,
              location: { jpegThumbnail: _0x24caa1 },
              templateButtons: _0x308c08,
              footer: _0x24ce40 + _0x5b062d(1046),
              mentions: [_0x228102],
            }),
            await hikki[_0x5b062d(1379)].payDiamond(_0x408e0c, _0x5b062d(1436))
          )
        }
        _0x42eb48()[_0x1ca3ce(1298)]((_0x4da708) => {}),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1266):
        var _0x339faa = _0x44ac49
        async function _0x4ab301() {
          var _0x27247a = _0x1ca3ce
          const _0x4e55c8 = await hikki[_0x27247a(1379)][_0x27247a(830)](
            _0x4ab702,
            _0x279021
          )
          let _0x2e7320 = _0x4e55c8[_0x27247a(1455)][_0x27247a(815)],
            _0x186b07 = _0x4e55c8[_0x27247a(1455)][_0x27247a(1467)].id,
            _0x35ecc6 = _0x4e55c8[_0x27247a(1455)].gameId,
            _0x4a4a8c = _0x4e55c8[_0x27247a(1455)].paymentName,
            _0x16b263 = _0x4e55c8.data.userNameGame,
            _0x285183 = _0x4e55c8[_0x27247a(1455)][_0x27247a(867)],
            _0x45ce09 = _0x4e55c8[_0x27247a(1455)].transactionId,
            _0x5a3b1b = _0x4e55c8.data[_0x27247a(1467)].name
          var _0x4c62f5 =
            '*KONFIRMASI TRANSAKSI*\n_#' +
            _0x2e7320 +
            _0x186b07 +
            _0x35ecc6 +
            '_\n\n*DATA RESULT*\n> _*ID Game :* ' +
            _0x4ab702 +
            _0x27247a(241) +
            _0x16b263 +
            _0x27247a(685) +
            _0x4a4a8c +
            _0x27247a(1403) +
            _0x285183 +
            _0x27247a(1474)
          return (
            _0x358c06(_0x4c62f5),
            await hikki[_0x27247a(1379)].payDiamond(_0x4e55c8, _0x27247a(1436))
          )
        }
        _0x4ab301()[_0x1ca3ce(1298)]((_0x4a0ac5) => {
          var _0x2a3229 = _0x1ca3ce
          _0x3a28a5[_0x2a3229(557)](
            _0x43727e,
            {
              image: { url: _0x4a0ac5.qrCode },
              caption:
                '_Silahkan Transfer Via Qris Di Atas_\n\n*Note :*\n_Wajib Transfer Sesuai Jumlah, Agar Diamond Otomatis Masuk_\n\n*Count :*\n_Qris Berlaku Hanya 5 Menit_',
            },
            { quoted: _0x1b0526 }
          )
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1151):
        _0x358c06(_0x1ca3ce(220))
        break
      case _0x1d56ef + 'gopay':
        {
          if (!_0x44ac49) {
            return _0x358c06(
              _0x1ca3ce(1471) +
                _0x203d41 +
                ' 0857\xD7\xD7\xD7\xD7\xD7\xD7\n\nSalah input nomor bukan tanggung jawab admin.'
            )
          }
          if (_0x430466[_0x1ca3ce(676)] == 10) {
            return _0x358c06(_0x1ca3ce(1302))
          }
          var _0x116859 = _0x44ac49
          for (let _0x7eb5ff of _0x307f65) {
            const _0x2d19eb = {
              title: _0x1ca3ce(1387) + _0x109ee0++,
              rows: [
                {
                  title: '' + _0x2b9d79[_0x7ffc2c++],
                  description: '' + _0x2bd25f[_0x19d527++],
                  rowId: '' + _0x1d56ef + _0x7eb5ff,
                },
              ],
            }
            _0x34400b[_0x1ca3ce(383)](_0x2d19eb)
          }
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(492):
        {
          if (!_0x2a8612) {
            return _0x358c06(
              'Kamu bukan user premium, kirim perintah *' +
                _0x1d56ef +
                _0x1ca3ce(275)
            )
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1e28ad = JSON.parse(fs[_0x1ca3ce(957)](_0x1ca3ce(772))),
            _0x265699 = _0x2f2071(_0x1e28ad)
          _0x358c06(_0x1ca3ce(521) + _0x265699.url)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(705):
        {
          if (!_0x2a8612) {
            return _0x358c06(_0x1ca3ce(677) + _0x1d56ef + _0x1ca3ce(275))
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1e28ad = JSON.parse(fs[_0x1ca3ce(957)](_0x1ca3ce(272))),
            _0x265699 = _0x2f2071(_0x1e28ad)
          _0x358c06(_0x1ca3ce(290) + _0x265699[_0x1ca3ce(667)])
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1372):
        {
          if (!_0x2a8612) {
            return _0x358c06(
              _0x1ca3ce(677) + _0x1d56ef + 'daftarprem* untuk membeli premium'
            )
          }
          _0x358c06(mess.wait)
          var _0x1e28ad = JSON.parse(
              fs[_0x1ca3ce(957)]('./media/ASUPAN/Ghea.json')
            ),
            _0x265699 = _0x2f2071(_0x1e28ad)
          _0x358c06(_0x1ca3ce(270) + _0x265699[_0x1ca3ce(667)])
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1321):
      case _0x1d56ef + _0x1ca3ce(262):
        {
          if (!_0x2a8612) {
            return _0x358c06(
              _0x1ca3ce(677) + _0x1d56ef + 'daftarprem* untuk membeli premium'
            )
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1e28ad = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)]('./media/ASUPAN/Hijaber.json')
            ),
            _0x265699 = _0x2f2071(_0x1e28ad)
          _0x358c06(_0x1ca3ce(1394) + _0x265699.url)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(442):
        {
          if (!_0x2a8612) {
            return _0x358c06(
              'Kamu bukan user premium, kirim perintah *' +
                _0x1d56ef +
                _0x1ca3ce(275)
            )
          }
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1e28ad = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(993))
            ),
            _0x265699 = _0x2f2071(_0x1e28ad)
          _0x358c06('*ASUPAN RIKA*\n_*Url :*_ ' + _0x265699.url)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(300):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1e28ad = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)]('./media/RANDOM/Quotes.json')
            ),
            _0x265699 = _0x2f2071(_0x1e28ad)
          _0x358c06(_0x5b5e84)
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'bacaansholat':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1e28ad = JSON.parse(fs.readFileSync(_0x1ca3ce(1238))),
            _0x3e91e6 = _0x2f2071(_0x1e28ad)
          _0x358c06(_0x4c7241)
        }
        break
      case _0x1d56ef + _0x1ca3ce(862):
        {
          _0x358c06(mess.wait)
          var _0x1e28ad = JSON.parse(fs.readFileSync(_0x1ca3ce(784))),
            _0x3e91e6 = _0x2f2071(_0x1e28ad)
          _0x358c06(_0x3f61ed)
        }
        break
      case _0x1d56ef + _0x1ca3ce(524):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1e28ad = JSON.parse(fs[_0x1ca3ce(957)](_0x1ca3ce(563)))
          _0x358c06(_0x1bf4dd)
        }
        break
      case _0x1d56ef + 'loli':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(593))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              image: _0x2174a9,
              caption: '\xA9 Random Loli',
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1380):
        {
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(950))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x358c06(_0x1ca3ce(1461) + _0x1fdc30)
        }
        break
      case _0x1d56ef + _0x1ca3ce(1368):
        {
          if (!_0x2a8612) {
            return _0x358c06(_0x1ca3ce(677) + _0x1d56ef + _0x1ca3ce(275))
          }
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(389))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x358c06('*RANDOM-ASUPAN*\n' + _0x1fdc30[_0x1ca3ce(1368)])
        }
        break
      case _0x1d56ef + _0x1ca3ce(414):
        {
          var _0x1ab9d4 = JSON.parse(fs.readFileSync(_0x1ca3ce(278))),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1154),
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(429):
        {
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(1118))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1516),
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(318):
        {
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs.readFileSync(_0x1ca3ce(266))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(436),
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'aesthetic':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(1399))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: '\xA9 Random ' + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'ahegao':
        {
          _0x358c06(mess.wait)
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)]('./db/data/ahegao.json')
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: '\xA9 Random ' + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1308):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON.parse(fs[_0x1ca3ce(957)](_0x1ca3ce(825))),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'akiyama':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(322))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: '\xA9 Random ' + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(610):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON.parse(fs[_0x1ca3ce(957)]('./db/data/ana.json')),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'ass':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs.readFileSync(_0x1ca3ce(581))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'asuna':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(1210))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(899):
        {
          _0x358c06(mess.wait)
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(487))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + 'deidara':
        {
          _0x358c06(mess.wait)
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs.readFileSync(_0x1ca3ce(1058))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(985):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)]('./db/data/elaina.json')
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(780):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(1105))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: '\xA9 Random ' + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(504):
        {
          _0x358c06(mess.wait)
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(1358))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(845):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(283))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30 },
              caption: _0x1ca3ce(1292) + _0x203d41,
            },
            { quoted: _0x1b0526 }
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1123):
        {
          _0x358c06(mess.wait)
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(1470))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x4e1875,
              caption: '\xA9 Random Cogan',
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41.slice(1), 1, commund), _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(682):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON.parse(
              fs[_0x1ca3ce(957)]('./media/RANDOM/Cecan.json')
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              image: _0x348625,
              caption: _0x1ca3ce(423),
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(916):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)]('./media/RANDOM/Anime.json')
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: { url: _0x1fdc30[_0x1ca3ce(667)] },
              caption: '\xA9 Random Anime',
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(582):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1c100b = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)]('./media/RANDOM/Meme.json')
            ),
            _0x1fdc30 = _0x2f2071(_0x1c100b)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x185931,
              caption: _0x1ca3ce(738),
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41.slice(1), 1, commund), _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1152):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON.parse(fs[_0x1ca3ce(957)](_0x1ca3ce(457))),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x13ec5d,
              caption: _0x1ca3ce(462),
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'bucin':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)]('./media/KATA-KATA/bucin.json')
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x358c06(_0x1fdc30 + _0x1ca3ce(1119))
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(712):
      case _0x1d56ef + _0x1ca3ce(523):
        {
          _0x358c06(mess.wait)
          var _0x1ab9d4 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)](_0x1ca3ce(1003))
            ),
            _0x1fdc30 = _0x2f2071(_0x1ab9d4)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x3760d5,
              caption: _0x1ca3ce(1084),
            },
            { quoted: _0x1b0526 }
          )
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x1710c3,
              caption: _0x1ca3ce(984),
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(1343):
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x4e97a6 = JSON.parse(fs[_0x1ca3ce(957)](_0x1ca3ce(776))),
            _0xa55cec = _0x2f2071(_0x4e97a6)
          _0x3a28a5[_0x1ca3ce(557)](
            _0x43727e,
            {
              image: _0x55f577,
              caption: _0x5dde80,
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41.slice(1), 1, commund), _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + 'truth':
        {
          _0x358c06(mess[_0x1ca3ce(613)])
          var _0x4e97a6 = JSON[_0x1ca3ce(1265)](
              fs[_0x1ca3ce(957)]('./media/KATA-KATA/truth.json')
            ),
            _0xa55cec = _0x2f2071(_0x4e97a6)
          _0x3a28a5.sendMessage(
            _0x43727e,
            {
              image: _0x153aa1,
              caption: _0xb5fa05,
            },
            { quoted: _0x1b0526 }
          )
        }
        addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund),
          _0x59f4e5(_0x228102, _0x203d41)
        break
      case _0x1d56ef + _0x1ca3ce(295):
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, caklontong)) {
          return _0x358c06('Masih ada game yang belum diselesaikan')
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](
            fs[_0x1ca3ce(957)](_0x1ca3ce(250))
          ),
          _0xa55cec = _0x2f2071(_0x1ec408)
        _0xa55cec[_0x1ca3ce(696)] = _0xa55cec[_0x1ca3ce(696)]
          [_0x1ca3ce(760)](_0x1ca3ce(448))
          .join('')
        var _0x54f673 =
          _0x1ca3ce(326) +
          _0x24a85e(
            _0x1ca3ce(510) +
              _0xa55cec[_0x1ca3ce(403)] +
              _0x1ca3ce(687) +
              _0x23323d +
              's'
          )
        _0x3a28a5
          .sendMessage(_0x43727e, { text: _0x54f673 }, { quoted: _0x1b0526 })
          [_0x1ca3ce(1298)]((_0x1e4f9e) => {
            var _0x1b2c10 = _0x1ca3ce,
              _0x403f7e = _0xa55cec[_0x1b2c10(696)].toLowerCase()
            addPlayGame(
              _0x43727e,
              _0x1b2c10(1030),
              _0x403f7e,
              _0x23323d,
              _0x1e4f9e,
              caklontong
            )
            let _0xd1561 = Number(parseInt(_0x430466[1]) * 1)
            limitAdd(_0x228102, glimit)
          }),
          addCmd(_0x203d41.slice(1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(704):
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, susunkata)) {
          return _0x358c06(_0x1ca3ce(362))
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](
            fs[_0x1ca3ce(957)](_0x1ca3ce(336))
          ),
          _0xa55cec = _0x2f2071(_0x1ec408)
        _0xa55cec.jawaban = _0xa55cec[_0x1ca3ce(696)]
          [_0x1ca3ce(760)]('Jawaban ')
          [_0x1ca3ce(1034)]('')
        var _0x54f673 =
          _0x1ca3ce(649) +
          _0xa55cec[_0x1ca3ce(403)] +
          '\nTipe : ' +
          _0xa55cec[_0x1ca3ce(884)] +
          '\nWaktu : ' +
          _0x23323d +
          's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          { text: _0x54f673 },
          { quoted: _0x1b0526 }
        )[_0x1ca3ce(1298)]((_0x249bc) => {
          var _0x1c5818 = _0x1ca3ce,
            _0x167c99 = _0xa55cec[_0x1c5818(696)].toLowerCase()
          addPlayGame(
            _0x43727e,
            _0x1c5818(1423),
            _0x167c99,
            _0x23323d,
            _0x249bc,
            susunkata
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + 'siapakahaku':
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, siapakahaku)) {
          return _0x358c06(_0x1ca3ce(362))
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](
            fs[_0x1ca3ce(957)](_0x1ca3ce(932))
          ),
          _0xa55cec = _0x2f2071(_0x1ec408)
        _0xa55cec[_0x1ca3ce(696)] = _0xa55cec[_0x1ca3ce(696)]
          [_0x1ca3ce(760)]('Jawaban ')
          [_0x1ca3ce(1034)]('')
        var _0x54f673 =
          _0x1ca3ce(649) +
          _0xa55cec[_0x1ca3ce(403)] +
          _0x1ca3ce(687) +
          _0x23323d +
          's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          { text: _0x54f673 },
          { quoted: _0x1b0526 }
        )[_0x1ca3ce(1298)]((_0x39e40e) => {
          var _0x54a36e = _0x1ca3ce,
            _0x34e3b8 = _0xa55cec[_0x54a36e(696)][_0x54a36e(1231)]()
          addPlayGame(
            _0x43727e,
            _0x54a36e(1344),
            _0x34e3b8,
            _0x23323d,
            _0x39e40e,
            siapakahaku
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(257):
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, tebakkalimat)) {
          return _0x358c06(_0x1ca3ce(362))
        }
        var _0x1ec408 = JSON.parse(fs[_0x1ca3ce(957)](_0x1ca3ce(1120))),
          _0xa55cec = _0x2f2071(_0x1ec408)
        _0xa55cec[_0x1ca3ce(696)] = _0xa55cec[_0x1ca3ce(696)]
          [_0x1ca3ce(760)]('Jawaban ')
          [_0x1ca3ce(1034)]('')
        var _0x54f673 =
          _0x1ca3ce(1079) +
          _0xa55cec[_0x1ca3ce(403)] +
          '\nWaktu : ' +
          _0x23323d +
          's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          { text: _0x54f673 },
          { quoted: _0x1b0526 }
        )[_0x1ca3ce(1298)]((_0x2571bf) => {
          var _0x2d6f5e = _0x1ca3ce,
            _0x2f9bdb = _0xa55cec[_0x2d6f5e(696)][_0x2d6f5e(1231)]()
          addPlayGame(
            _0x43727e,
            'Tebak Kalimat',
            _0x2f9bdb,
            _0x23323d,
            _0x2571bf,
            tebakkalimat
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41.slice(1), 1, commund)
        break
      case _0x1d56ef + 'tebakkata':
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, tebakkata)) {
          return _0x358c06(_0x1ca3ce(362))
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](
            fs[_0x1ca3ce(957)](_0x1ca3ce(404))
          ),
          _0xa55cec = _0x2f2071(_0x1ec408)
        _0xa55cec[_0x1ca3ce(696)] = _0xa55cec[_0x1ca3ce(696)]
          [_0x1ca3ce(760)]('Jawaban ')
          .join('')
        var _0x54f673 =
          _0x1ca3ce(622) +
          _0xa55cec[_0x1ca3ce(403)] +
          _0x1ca3ce(687) +
          _0x23323d +
          's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          { text: _0x54f673 },
          { quoted: _0x1b0526 }
        ).then((_0x213fd7) => {
          var _0x29d2fe = _0x1ca3ce,
            _0x4578e9 = _0xa55cec[_0x29d2fe(696)][_0x29d2fe(1231)]()
          addPlayGame(
            _0x43727e,
            _0x29d2fe(1514),
            _0x4578e9,
            _0x23323d,
            _0x213fd7,
            tebakkata
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(1043):
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, tebaklirik)) {
          return _0x358c06(_0x1ca3ce(362))
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](
            fs[_0x1ca3ce(957)]('./media/GAMES/tebaklirik.json')
          ),
          _0xa55cec = _0x2f2071(_0x1ec408)
        _0xa55cec[_0x1ca3ce(696)] = _0xa55cec[_0x1ca3ce(696)]
          .split('Jawaban ')
          [_0x1ca3ce(1034)]('')
        var _0x54f673 =
          _0x1ca3ce(869) +
          _0xa55cec[_0x1ca3ce(403)] +
          _0x1ca3ce(687) +
          _0x23323d +
          's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          { text: _0x54f673 },
          { quoted: _0x1b0526 }
        )[_0x1ca3ce(1298)]((_0x291e08) => {
          var _0x5d2511 = _0x1ca3ce,
            _0x3f991b = _0xa55cec[_0x5d2511(696)][_0x5d2511(1231)]()
          addPlayGame(
            _0x43727e,
            _0x5d2511(247),
            _0x3f991b,
            _0x23323d,
            _0x291e08,
            tebaklirik
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + 'tebaktebakan':
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, tebaktebakan)) {
          return _0x358c06('Masih ada game yang belum diselesaikan')
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](
            fs[_0x1ca3ce(957)]('./media/GAMES/tebaktebakan.json')
          ),
          _0xa55cec = _0x2f2071(_0x1ec408)
        _0xa55cec[_0x1ca3ce(696)] = _0xa55cec[_0x1ca3ce(696)]
          [_0x1ca3ce(760)](_0x1ca3ce(448))
          .join('')
        var _0x54f673 =
          _0x1ca3ce(948) +
          _0xa55cec[_0x1ca3ce(403)] +
          _0x1ca3ce(687) +
          _0x23323d +
          's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          { text: _0x54f673 },
          { quoted: _0x1b0526 }
        ).then((_0x33b0ed) => {
          var _0x463d37 = _0x1ca3ce,
            _0x863262 = _0xa55cec[_0x463d37(696)].toLowerCase()
          addPlayGame(
            _0x43727e,
            'Tebak Tebakan',
            _0x863262,
            _0x23323d,
            _0x33b0ed,
            tebaktebakan
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(308):
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, tekateki)) {
          return _0x358c06('Masih ada game yang belum diselesaikan')
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](
            fs[_0x1ca3ce(957)](_0x1ca3ce(376))
          ),
          _0xa55cec = _0x2f2071(_0x1ec408)
        _0xa55cec[_0x1ca3ce(696)] = _0xa55cec[_0x1ca3ce(696)]
          [_0x1ca3ce(760)](_0x1ca3ce(448))
          .join('')
        var _0x54f673 =
          '*TEBAK TEBAKAN*\nSoal : ' +
          _0xa55cec[_0x1ca3ce(403)] +
          _0x1ca3ce(687) +
          _0x23323d +
          's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          { text: _0x54f673 },
          { quoted: _0x1b0526 }
        ).then((_0x10f1b3) => {
          var _0x3babc5 = _0x1ca3ce,
            _0x39ecc5 = _0xa55cec[_0x3babc5(696)][_0x3babc5(1231)]()
          addPlayGame(
            _0x43727e,
            _0x3babc5(1011),
            _0x39ecc5,
            _0x23323d,
            _0x10f1b3,
            tekateki
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41.slice(1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(449):
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, tebakgambar)) {
          return _0x358c06(_0x1ca3ce(362))
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](fs.readFileSync(_0x1ca3ce(1226))),
          _0x23016c = _0x2f2071(_0x1ec408)
        _0x23016c[_0x1ca3ce(696)] = _0x23016c[_0x1ca3ce(696)]
          [_0x1ca3ce(760)](_0x1ca3ce(448))
          [_0x1ca3ce(1034)]('')
        var _0x54f673 =
          _0x1ca3ce(1404) +
          _0x23016c[_0x1ca3ce(1269)] +
          '\nWaktu : ' +
          _0x23323d +
          's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          {
            image: { url: _0x23016c[_0x1ca3ce(879)] },
            caption: _0x54f673,
          },
          { quoted: _0x1b0526 }
        ).then((_0x3e06d8) => {
          var _0x345022 = _0x1ca3ce,
            _0x586853 = _0x23016c[_0x345022(696)].toLowerCase()
          addPlayGame(
            _0x43727e,
            _0x345022(350),
            _0x586853,
            _0x23323d,
            _0x3e06d8,
            tebakgambar
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41.slice(1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(354):
        if (isGame(_0x228102, _0x2e401c, _0x4cec54, glimit)) {
          return _0x358c06(_0x1ca3ce(387))
        }
        if (isPlayGame(_0x43727e, tebakgame)) {
          return _0x358c06(_0x1ca3ce(362))
        }
        var _0x1ec408 = JSON[_0x1ca3ce(1265)](
            fs[_0x1ca3ce(957)]('./media/GAMES/tebakgame.json')
          ),
          _0x23016c = _0x2f2071(_0x1ec408)
        _0x23016c[_0x1ca3ce(696)] = _0x23016c.jawaban
          .split(_0x1ca3ce(448))
          .join('')
        var _0x54f673 = _0x1ca3ce(1361) + _0x23323d + 's'
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          {
            image: { url: _0x23016c.img },
            caption: _0x54f673,
          },
          { quoted: _0x1b0526 }
        )[_0x1ca3ce(1298)]((_0x59690e) => {
          var _0x289a94 = _0x1ca3ce,
            _0x159356 = _0x23016c[_0x289a94(696)][_0x289a94(1231)]()
          addPlayGame(
            _0x43727e,
            _0x289a94(897),
            _0x159356,
            _0x23323d,
            _0x59690e,
            tebakgame
          )
          gameAdd(_0x228102, glimit)
        }),
          addCmd(_0x203d41[_0x1ca3ce(284)](1), 1, commund)
        break
      case _0x1d56ef + _0x1ca3ce(1049):
      case _0x1d56ef + _0x1ca3ce(1014):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(1306))
          }
          if (_0x3c7392.status == false) {
            return _0x358c06(_0x3c7392.message)
          }
          _0x358c06(
            _0x1ca3ce(469) +
              _0x3c7392[_0x1ca3ce(754)][_0x1ca3ce(863)].nama +
              _0x1ca3ce(1442) +
              _0x3c7392.message.nama_anda[_0x1ca3ce(973)] +
              _0x1ca3ce(650) +
              _0x3c7392[_0x1ca3ce(754)][_0x1ca3ce(514)][_0x1ca3ce(1106)] +
              '\n> *Lahir Pasangan :* ' +
              _0x3c7392[_0x1ca3ce(754)][_0x1ca3ce(514)][_0x1ca3ce(973)] +
              _0x1ca3ce(400) +
              _0x3c7392[_0x1ca3ce(754)][_0x1ca3ce(600)] +
              _0x1ca3ce(874) +
              _0x3c7392[_0x1ca3ce(754)].catatan
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1021):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(1400))
          }
          if (_0x2b8078[_0x1ca3ce(1481)] == false) {
            return _0x358c06(_0x2b8078[_0x1ca3ce(754)])
          }
          _0x358c06(
            '> *Nomor HP :* ' +
              _0x2b8078.message[_0x1ca3ce(725)] +
              '\n> *Angka Shuzi :* ' +
              _0x2b8078.message[_0x1ca3ce(614)] +
              '\n> *Energi Positif :*\n- Kekayaan : ' +
              _0x2b8078.message[_0x1ca3ce(634)][_0x1ca3ce(463)] +
              _0x1ca3ce(924) +
              _0x2b8078.message.energi_positif[_0x1ca3ce(1393)] +
              _0x1ca3ce(744) +
              _0x2b8078[_0x1ca3ce(754)][_0x1ca3ce(634)].cinta +
              _0x1ca3ce(293) +
              _0x2b8078[_0x1ca3ce(754)][_0x1ca3ce(634)].kestabilan +
              _0x1ca3ce(913) +
              _0x2b8078.message.energi_positif.persentase +
              _0x1ca3ce(1107) +
              _0x2b8078[_0x1ca3ce(754)].energi_negatif[_0x1ca3ce(325)] +
              '\n- Kehilangan : ' +
              _0x2b8078.message[_0x1ca3ce(908)][_0x1ca3ce(741)] +
              _0x1ca3ce(243) +
              _0x2b8078.message.energi_negatif[_0x1ca3ce(1223)] +
              '\n- Kehancuran : ' +
              _0x2b8078[_0x1ca3ce(754)][_0x1ca3ce(908)][_0x1ca3ce(515)] +
              _0x1ca3ce(913) +
              _0x2b8078[_0x1ca3ce(754)][_0x1ca3ce(908)][_0x1ca3ce(282)]
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1044):
      case _0x1d56ef + _0x1ca3ce(248):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(1192))
          }
          if (_0x225a9a[_0x1ca3ce(1481)] == false) {
            return _0x57d5fb.reply(_0x225a9a[_0x1ca3ce(754)])
          }
          _0x358c06(
            '> *Mimpi :* ' +
              _0x225a9a[_0x1ca3ce(754)].mimpi +
              _0x1ca3ce(1388) +
              _0x225a9a[_0x1ca3ce(754)][_0x1ca3ce(1116)] +
              '\n> *Solusi :* ' +
              _0x225a9a[_0x1ca3ce(754)][_0x1ca3ce(537)]
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1129):
      case _0x1d56ef + _0x1ca3ce(818):
        {
          if (!_0x44ac49) {
            return _0x358c06('Example :\n' + _0x203d41 + _0x1ca3ce(1306))
          }
          if (_0x393e86[_0x1ca3ce(1481)] == false) {
            return _0x358c06(_0x393e86[_0x1ca3ce(754)])
          }
          _0x358c06(
            '> *Nama Anda :* ' +
              _0x393e86[_0x1ca3ce(754)][_0x1ca3ce(863)][_0x1ca3ce(1106)] +
              '\n> *Lahir Anda :* ' +
              _0x393e86.message[_0x1ca3ce(863)][_0x1ca3ce(973)] +
              _0x1ca3ce(650) +
              _0x393e86[_0x1ca3ce(754)].nama_pasangan.nama +
              _0x1ca3ce(1333) +
              _0x393e86.message[_0x1ca3ce(514)][_0x1ca3ce(973)] +
              _0x1ca3ce(400) +
              _0x393e86[_0x1ca3ce(754)][_0x1ca3ce(600)] +
              '\n> *Catatan :* ' +
              _0x393e86[_0x1ca3ce(754)].catatan
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1475):
        {
          if (!_0x44ac49) {
            return _0x358c06('Example :\n' + _0x203d41 + _0x1ca3ce(1306))
          }
          if (_0x7b302b[_0x1ca3ce(1481)] == false) {
            return _0x57d5fb[_0x1ca3ce(962)](_0x7b302b[_0x1ca3ce(754)])
          }
          _0x358c06(
            _0x1ca3ce(1350) +
              _0x7b302b[_0x1ca3ce(754)][_0x1ca3ce(1189)][_0x1ca3ce(1106)] +
              '\n> *Lahir Suami :* ' +
              _0x7b302b.message[_0x1ca3ce(1189)].tgl_lahir +
              _0x1ca3ce(346) +
              _0x7b302b.message[_0x1ca3ce(1326)][_0x1ca3ce(1106)] +
              _0x1ca3ce(445) +
              _0x7b302b[_0x1ca3ce(754)].istri[_0x1ca3ce(973)] +
              _0x1ca3ce(400) +
              _0x7b302b.message.result +
              '\n> *Catatan :* ' +
              _0x7b302b[_0x1ca3ce(754)][_0x1ca3ce(981)]
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(301):
      case _0x1d56ef + _0x1ca3ce(636):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(1306))
          }
          if (_0x51a94b.status == false) {
            return _0x358c06(_0x51a94b[_0x1ca3ce(754)])
          }
          _0x358c06(
            _0x1ca3ce(469) +
              _0x51a94b[_0x1ca3ce(754)][_0x1ca3ce(863)][_0x1ca3ce(1106)] +
              '\n> *Lahir Anda :* ' +
              _0x51a94b[_0x1ca3ce(754)][_0x1ca3ce(863)][_0x1ca3ce(973)] +
              '\n> *Nama Pasangan :* ' +
              _0x51a94b.message[_0x1ca3ce(514)][_0x1ca3ce(1106)] +
              '\n> *Lahir Pasangan :* ' +
              _0x51a94b[_0x1ca3ce(754)][_0x1ca3ce(514)].tgl_lahir +
              _0x1ca3ce(267) +
              _0x51a94b.message.sisi_positif +
              _0x1ca3ce(516) +
              _0x51a94b[_0x1ca3ce(754)].sisi_negatif +
              _0x1ca3ce(874) +
              _0x51a94b[_0x1ca3ce(754)].catatan
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(1447):
        {
          if (!_0x44ac49) {
            return _0x358c06(_0x1ca3ce(730) + _0x203d41 + _0x1ca3ce(1338))
          }
          if (_0x4728cc[_0x1ca3ce(1481)] == false) {
            return _0x358c06(_0x4728cc.message)
          }
          _0x358c06(
            _0x1ca3ce(596) +
              _0x44ac49 +
              _0x1ca3ce(1388) +
              _0x4728cc[_0x1ca3ce(754)][_0x1ca3ce(1116)] +
              '\n> *Catatan :* ' +
              _0x4728cc.message.catatan
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(629):
      case _0x1d56ef + 'cocoknama':
        {
          if (!_0x44ac49) {
            return _0x358c06('Example :\n' + _0x203d41 + _0x1ca3ce(218))
          }
          if (_0x5f1ee9[_0x1ca3ce(1481)] == false) {
            return _0x358c06(_0x5f1ee9[_0x1ca3ce(754)])
          }
          _0x358c06(
            '> *Nama :* ' +
              _0x5f1ee9[_0x1ca3ce(754)][_0x1ca3ce(1106)] +
              _0x1ca3ce(1234) +
              _0x5f1ee9.message.tgl_lahir +
              _0x1ca3ce(1428) +
              _0x5f1ee9[_0x1ca3ce(754)][_0x1ca3ce(1363)] +
              _0x1ca3ce(1296) +
              _0x5f1ee9[_0x1ca3ce(754)].destiny +
              _0x1ca3ce(1279) +
              _0x5f1ee9[_0x1ca3ce(754)][_0x1ca3ce(880)] +
              _0x1ca3ce(1261) +
              _0x5f1ee9[_0x1ca3ce(754)][_0x1ca3ce(1090)] +
              _0x1ca3ce(753) +
              _0x5f1ee9[_0x1ca3ce(754)][_0x1ca3ce(397)]
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(936):
      case _0x1d56ef + _0x1ca3ce(1354):
      case _0x1d56ef + 'pasangan':
        {
          if (!_0x44ac49) {
            return _0x358c06('Example :\n' + _0x203d41 + ' yanto|yanti')
          }
          if (_0x37b567.status == false) {
            return _0x358c06(_0x37b567[_0x1ca3ce(754)])
          }
          _0x358c06(
            _0x1ca3ce(469) +
              _0x37b567.message[_0x1ca3ce(863)] +
              _0x1ca3ce(650) +
              _0x37b567[_0x1ca3ce(754)][_0x1ca3ce(514)] +
              '\n> *Sisi Positif :* ' +
              _0x37b567.message[_0x1ca3ce(517)] +
              _0x1ca3ce(516) +
              _0x37b567[_0x1ca3ce(754)][_0x1ca3ce(955)]
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(459):
        {
          if (!_0x44ac49) {
            return _0x358c06('Example : ' + _0x203d41 + _0x1ca3ce(877))
          }
          if (_0x101065[_0x1ca3ce(1481)] == false) {
            return _0x358c06(_0x101065[_0x1ca3ce(754)])
          }
          _0x358c06(
            _0x1ca3ce(706) +
              _0x101065.message[_0x1ca3ce(430)] +
              '\n> *Usaha :* ' +
              _0x101065[_0x1ca3ce(754)][_0x1ca3ce(355)]
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(887):
      case _0x1d56ef + _0x1ca3ce(1299):
        {
          if (!_0x2a8612) {
            return _0x358c06(mess.OnlyPrem)
          }
          if (!_0x44ac49) {
            return _0x358c06(
              'Kirim Perintah ' +
                _0x203d41 +
                _0x1ca3ce(370) +
                _0x203d41 +
                _0x1ca3ce(358)
            )
          }
          _0x358c06(_0x1ca3ce(544))
        }
        break
      case _0x1d56ef + _0x1ca3ce(342):
        {
          var _0x116859 = _0x44ac49[_0x1ca3ce(760)]('|')[1]
          _0x5f41b1(
            _0x116859 + _0x1ca3ce(917),
            _0x35ca09[_0x1ca3ce(760)](_0x1ca3ce(917))[0],
            _0x3ed490,
            _0x1b0526
          )
        }
        break
      case _0x1d56ef + _0x1ca3ce(769):
        if (!_0x2e401c) {
          return _0x358c06(mess.OnlyOwner)
        }
        if (!_0x1aa604) {
          return _0x358c06('Balas pesannya')
        }
        if (_0x430466.length < 2) {
          return _0x358c06('Masukkan 1 emoji')
        }
        if (!_0x5ee0e9(_0x430466[1])) {
          return _0x358c06(_0x1ca3ce(645))
        }
        if (_0x5ee0e9(_0x430466[1]).length > 1) {
          return _0x358c06('Satu aja emojinya')
        }
        _0x3a28a5.sendMessageFromContent(_0x43727e, _0x15e0b8)
        break
      case _0x1d56ef + _0x1ca3ce(409):
        if (_0x430466.length < 2) {
          return _0x358c06(_0x1ca3ce(1270) + _0x203d41 + _0x1ca3ce(665))
        }
        if (!_0x20ee07) {
          _0x20ee07 = 'id'
        }
        var _0x54f673 = ['female', 'male'][_0x1ca3ce(1111)](_0x430466[1])
          ? _0x44ac49[_0x1ca3ce(284)](
              _0x430466[1][_0x1ca3ce(676)] + 1,
              _0x44ac49.length
            )[_0x1ca3ce(760)]('--')[0]
          : _0x44ac49.split('--')[0]
        _0x3a28a5[_0x1ca3ce(384)](_0x1ca3ce(814), _0x43727e),
          getBuffer(
            _0x1ca3ce(746) +
              removeEmojis(_0x54f673) +
              _0x1ca3ce(531) +
              _0x20ee07 +
              _0x1ca3ce(1241) +
              _0x5e124d
          )[_0x1ca3ce(1298)](async (_0x520746) => {
            var _0x4713e8 = _0x1ca3ce
            _0x3a28a5[_0x4713e8(557)](
              _0x43727e,
              {
                audio: _0x520746,
                mimetype: _0x4713e8(1508),
                ptt: true,
              },
              { quoted: _0x1b0526 }
            )
          })
        break
      case _0x1d56ef + _0x1ca3ce(440):
        if (!_0x2a8612) {
          return _0x358c06(mess[_0x1ca3ce(344)])
        }
        if (_0x1aa604) {
          if (_0x102651.chats[_0x1ca3ce(676)] > 1) {
            var _0x2f1966 = _0x102651[_0x1ca3ce(1418)][_0x1ca3ce(760)]('\n'),
              _0x54f673 = ''
            for (let _0xb75cb5 of _0x2f1966) {
              var _0x23eac9 = _0xb75cb5[_0x1ca3ce(1201)](/[+| |(|)|.|-]/gi, ''),
                _0x456bda = parseInt(_0x23eac9)
              if (!_0x456bda) {
                _0x54f673 += _0xb75cb5 + _0x1ca3ce(242)
              }
              _0x54f673 += _0x1ca3ce(1495) + _0x456bda + '\n'
            }
            _0x358c06(_0x54f673[_0x1ca3ce(1297)]())
          } else {
            var _0x23eac9 = _0x102651.chats[_0x1ca3ce(1201)](
                /[+| |(|)|.|-]/gi,
                ''
              ),
              _0x456bda = parseInt(_0x23eac9)
            if (!_0x456bda) {
              return _0x358c06('Pastikan hanya reply angka')
            }
            _0x358c06(_0x1ca3ce(1495) + _0x456bda)
          }
        } else {
          if (_0x430466.length > 1) {
            if (_0x44ac49[_0x1ca3ce(760)]('\n')[_0x1ca3ce(676)] > 1) {
              var _0x2f1966 = _0x44ac49[_0x1ca3ce(760)]('\n'),
                _0x54f673 = ''
              for (let _0x17a989 of _0x2f1966) {
                var _0x23eac9 = _0x17a989[_0x1ca3ce(1201)](
                    /[+| |(|)|.|-]/gi,
                    ''
                  ),
                  _0x456bda = parseInt(_0x23eac9)
                if (!_0x456bda) {
                  _0x54f673 += _0x17a989 + _0x1ca3ce(242)
                }
                _0x54f673 += 'wa.me/' + _0x456bda + '\n'
              }
              _0x358c06(_0x54f673[_0x1ca3ce(1297)]())
            } else {
              var _0x23eac9 = _0x44ac49[_0x1ca3ce(1201)](/[+| |(|)|.|-]/gi, ''),
                _0x456bda = parseInt(_0x23eac9)
              if (!_0x456bda) {
                return _0x358c06(_0x1ca3ce(1438))
              }
              _0x358c06('wa.me/' + _0x456bda)
            }
          } else {
            _0x358c06(_0x1ca3ce(1270) + _0x203d41 + _0x1ca3ce(1335) + _0x203d41)
          }
        }
        break
      case _0x1d56ef + 'q':
      case _0x1d56ef + _0x1ca3ce(872):
      case _0x1d56ef + 'getquoted':
      case _0x1d56ef + 'quoted':
        if (!_0x2a8612) {
          return _0x358c06(mess[_0x1ca3ce(344)])
        }
        if (!_0x1aa604) {
          return _0x358c06(_0x1ca3ce(552))
        }
        var _0x23016c = await _0x5b4a25[_0x1ca3ce(914)](_0x43727e, _0x102651.id)
        _0x23016c = serialize(_0x3a28a5, _0x23016c)
        if (_0x23016c[_0x1ca3ce(750)] !== true) {
          return _0x358c06('The message you replied to contained no reply')
        }
        if (
          _0x23016c.message[_0x106d81][_0x1ca3ce(723)][_0x1ca3ce(1521)]
            .conversation
        ) {
          _0x358c06(
            '' +
              _0x23016c[_0x1ca3ce(754)][_0x106d81][_0x1ca3ce(723)][
                _0x1ca3ce(1521)
              ][_0x1ca3ce(982)]
          )
        } else {
          var _0x5bb989 =
            _0x23016c[_0x1ca3ce(754)][_0x106d81][_0x1ca3ce(723)].quotedMessage
          _0x3a28a5.sendMessageFromContent(_0x43727e, _0x5bb989)
        }
        break
      case _0x1d56ef + _0x1ca3ce(1140):
        if (!_0x2e401c && !_0x1423f9) {
          return replyDeface(mess[_0x1ca3ce(1398)])
        }
        if (_0x430466[_0x1ca3ce(676)] < 2) {
          return _0x358c06(
            _0x1ca3ce(926) +
              _0x203d41 +
              _0x1ca3ce(416) +
              _0x203d41 +
              _0x1ca3ce(637)
          )
        }
        if (!_0xdd3a35(_0x430466[1])) {
          return _0x358c06(mess[_0x1ca3ce(1181)].Iv)
        }
        var _0x44563e = _0x430466[1]
        _0x44563e = _0x44563e[_0x1ca3ce(760)](_0x1ca3ce(1097))[1]
        if (!_0x430466[2]) {
          return _0x358c06(_0x1ca3ce(890))
        }
        var _0x23016c = await _0x3a28a5[_0x1ca3ce(313)](_0x44563e)
        if (_sewa[_0x1ca3ce(271)](_0x23016c, sewa)) {
          return _0x358c06(_0x1ca3ce(656))
        }
        _sewa.addSewaGroup(_0x23016c, _0x430466[2], sewa),
          _0x358c06(_0x1ca3ce(625))
        break
      case _0x1d56ef + _0x1ca3ce(477):
        if (!_0x2e401c && !_0x1423f9) {
          return replyDeface(mess.OnlyOwner)
        }
        if (!_0x25e638) {
          return _0x358c06(_0x1ca3ce(228))
        }
        if (!_0x48cabe) {
          return _0x358c06(_0x1ca3ce(1195))
        }
        sewa.splice(
          _sewa[_0x1ca3ce(529)](_0x430466[1] ? _0x430466[1] : _0x43727e, sewa),
          1
        ),
          fs.writeFileSync(
            _0x1ca3ce(1186),
            JSON[_0x1ca3ce(1307)](sewa, null, 2)
          ),
          _0x358c06('Sukses')
        break
      case _0x1d56ef + 'listsewa':
        for (let _0x3e45ed of sewa) {
          _0x56ed1d +=
            '*Name:* ' +
            (await _0x5e067c(_0x3e45ed.id)) +
            _0x1ca3ce(680) +
            _0x3e45ed.id +
            '\n'
          if (_0x3e45ed[_0x1ca3ce(1082)] === _0x1ca3ce(1309)) {
            let _0x1e35d1 = 'PERMANENT'
            _0x56ed1d += _0x1ca3ce(444)
          } else {
            let _0x17de67 = ms(_0x3e45ed[_0x1ca3ce(1082)] - Date.now())
            _0x56ed1d +=
              _0x1ca3ce(1320) +
              _0x17de67[_0x1ca3ce(1245)] +
              ' day(s) ' +
              _0x17de67[_0x1ca3ce(281)] +
              _0x1ca3ce(951) +
              _0x17de67.minutes +
              _0x1ca3ce(773) +
              _0x17de67[_0x1ca3ce(327)] +
              _0x1ca3ce(812)
          }
        }
        _0x3a28a5[_0x1ca3ce(557)](
          _0x43727e,
          { text: _0x56ed1d },
          { quoted: _0x1b0526 }
        )
        break
      case _0x1d56ef + 'checksewa':
      case _0x1d56ef + 'ceksewa':
        if (!_0x25e638) {
          return _0x358c06(mess[_0x1ca3ce(1063)])
        }
        if (!_0x48cabe) {
          return _0x358c06(_0x1ca3ce(990))
        }
        _0x358c06(_0x558c58)
        break
      case _0x1d56ef + 'cekprem':
      case _0x1d56ef + _0x1ca3ce(1273):
        if (!_0x2a8612) {
          return _0x358c06(_0x1ca3ce(677) + _0x1d56ef + _0x1ca3ce(275))
        }
        if (_0x2e401c) {
          return _0x358c06(_0x1ca3ce(321))
        }
        if (_prem.getPremiumExpired(_0x228102, premium) == 'PERMANENT') {
          return _0x358c06(_0x1ca3ce(1309))
        }
        _0x358c06(_0x1a6410)
        break
      case _0x1d56ef + 'listprem':
        for (let _0x584787 of premium) {
          _0x2a9ef5[_0x1ca3ce(383)](_0x584787.id)
          _0x4266f1 += '*ID :* @' + _0x584787.id[_0x1ca3ce(760)]('@')[0] + '\n'
          if (_0x584787[_0x1ca3ce(1082)] === _0x1ca3ce(1309)) {
            let _0x45e897 = 'PERMANENT'
            _0x4266f1 += _0x1ca3ce(444)
          } else {
            let _0x4feb67 = ms(
              _0x584787[_0x1ca3ce(1082)] - Date[_0x1ca3ce(1035)]()
            )
            _0x4266f1 +=
              _0x1ca3ce(1320) +
              _0x4feb67[_0x1ca3ce(1245)] +
              _0x1ca3ce(564) +
              _0x4feb67[_0x1ca3ce(281)] +
              _0x1ca3ce(951) +
              _0x4feb67[_0x1ca3ce(1506)] +
              ' minute(s) ' +
              _0x4feb67.seconds +
              ' second(s)\n\n'
          }
        }
        _0x4b9e39(_0x4266f1, _0x2a9ef5, true)
        break
      case _0x1d56ef + _0x1ca3ce(789):
      case _0x1d56ef + _0x1ca3ce(525):
        var _0x54f673 = '' + _0x12ee62(_0x228102, _0x1d56ef)
        _0x358c06(_0x54f673)
        break
      case _0x1d56ef + 'addprem':
        if (!_0x2e401c) {
          return _0x358c06(mess.OnlyOwner)
        }
        if (_0x430466[_0x1ca3ce(676)] < 2) {
          return _0x358c06(
            _0x1ca3ce(353) +
              _0x1d56ef +
              _0x1ca3ce(807) +
              _0x1d56ef +
              _0x1ca3ce(639) +
              _0x203d41 +
              _0x1ca3ce(1422) +
              _0x1d56ef +
              _0x1ca3ce(925)
          )
        }
        if (!_0x430466[2]) {
          return _0x358c06('Mau yang berapa hari?')
        }
        if (_0x50fa1b.length !== 0) {
          _prem[_0x1ca3ce(588)](_0x50fa1b[0], _0x430466[2], premium)
          _0x358c06(_0x1ca3ce(479))
        } else {
          if (_0x560d1a[_0x1ca3ce(676)] == 0) {
            return _0x358c06(_0x1ca3ce(1336))
          }
          _0x50def3(_0x1ca3ce(1435), _0x228102, _cmd)
          _prem[_0x1ca3ce(588)](
            _0x430466[1] + _0x1ca3ce(917),
            _0x430466[2],
            premium
          )
          _0x358c06(_0x1ca3ce(479))
        }
        break
      case _0x1d56ef + 'delprem':
        if (!_0x2e401c) {
          return _0x358c06(mess.OnlyOwner)
        }
        if (_0x430466.length < 2) {
          return _0x358c06(
            _0x1ca3ce(353) +
              _0x1d56ef +
              _0x1ca3ce(703) +
              _0x1d56ef +
              'delprem* nomor'
          )
        }
        _0x50fa1b[_0x1ca3ce(676)] !== 0
          ? (premium[_0x1ca3ce(953)](
              _prem[_0x1ca3ce(464)](_0x50fa1b[0], premium),
              1
            ),
            fs[_0x1ca3ce(1512)](
              './database/premium.json',
              JSON[_0x1ca3ce(1307)](premium)
            ),
            _0x358c06(_0x1ca3ce(653)))
          : (_0x50def3(_0x1ca3ce(960), _0x228102, _cmd),
            premium[_0x1ca3ce(953)](
              _prem[_0x1ca3ce(464)](_0x430466[1] + _0x1ca3ce(917), premium),
              1
            ),
            fs[_0x1ca3ce(1512)](
              './database/premium.json',
              JSON[_0x1ca3ce(1307)](premium)
            ),
            _0x358c06(_0x1ca3ce(653)))
        break
      case _0x1d56ef + _0x1ca3ce(296):
        {
          if (!_0x2a8612) {
            return _0x358c06(mess[_0x1ca3ce(344)])
          }
          if (!_0x44ac49) {
            return _0x358c06('Contoh : \n' + _0x203d41 + ' siapa ir Soekarno')
          }
          _0x358c06(mess.wait)
          brainly('' + _0x44ac49)[_0x1ca3ce(1298)]((_0x4bc54e) => {
            var _0x26f638 = _0x1ca3ce
            console.log(_0x4bc54e)
            var _0x2d2d9b = _0x4bc54e[_0x26f638(1455)],
              _0x245598 = _0x26f638(236)
            for (let _0x1eaf89 of _0x2d2d9b) {
              _0x245598 +=
                _0x26f638(1136) +
                _0x1eaf89[_0x26f638(952)] +
                '\n\n*\u27B8 Jawaban:* ' +
                _0x1eaf89[_0x26f638(696)][0][_0x26f638(1199)] +
                _0x26f638(1179)
            }
            _0x358c06(_0x245598)
          })
        }
        break
      case _0x1d56ef + _0x1ca3ce(1263):
      case _0x1d56ef + 'daftarprem':
      case _0x1d56ef + 'daftarpremium':
        var _0x54f673 =
          'Jika kamu ingin menjadi Member Premium, kamu cukup membayar Rp5.000 untuk 1 Minggu, Rp20.000 untuk 1 Bulan dan jika ingin menjadi Member Premium Permanen kamu hanya membayar Rp50.000. Jika berminat silahkan chat Owner Bot, ketik ' +
          _0x1d56ef +
          _0x1ca3ce(1144)
        _0x358c06(_0x54f673)
        break
      case _0x1d56ef + 'enc':
      case _0x1d56ef + _0x1ca3ce(454):
      case _0x1d56ef + _0x1ca3ce(535):
      case _0x1d56ef + 'obfuscator':
        if (!_0x44ac49) {
          return _0x358c06(_0x1ca3ce(1176))
        }
        _0x358c06(_0x44c78c[_0x1ca3ce(317)]())
        break
      default:
    }
  } catch (_0x590752) {
    console[_0x1ca3ce(1200)](color(_0x1ca3ce(540), _0x1ca3ce(714)), _0x590752)
  }
}
