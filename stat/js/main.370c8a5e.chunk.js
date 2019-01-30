(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    224: function(e, n, t) {
      e.exports = t.p + "stat/media/cz-flag.eada4bf2.png";
    },
    225: function(e, n, t) {
      e.exports = t.p + "stat/media/en-flag.4d460eba.png";
    },
    237: function(e, n, t) {
      e.exports = t(552);
    },
    552: function(e, n, t) {
      "use strict";
      t.r(n);
      var a = t(0),
        r = t.n(a),
        o = t(28),
        i = t.n(o),
        c = t(554),
        l = t(556),
        u = t(555),
        s = t(32),
        d = t(90),
        p = t(8),
        m = t(9),
        f = t(12),
        h = t(10),
        g = t(11),
        b = t(3),
        v = t(4);
      function y() {
        var e = Object(b.a)([
          "\n  width: 300px;\n  height: 600px;\n  margin-top: 25px;\n"
        ]);
        return (
          (y = function() {
            return e;
          }),
          e
        );
      }
      function x() {
        var e = Object(b.a)([
          "\n  background: #1e2942;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"
        ]);
        return (
          (x = function() {
            return e;
          }),
          e
        );
      }
      var O = v.a.div(x()),
        w = v.a.img(y()),
        E = t(92),
        j = t.n(E),
        k = window.FBInstant,
        R = (function(e) {
          function n() {
            return (
              Object(p.a)(this, n),
              Object(f.a)(this, Object(h.a)(n).apply(this, arguments))
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props.history;
                  k.setLoadingProgress(100),
                    k.startGameAsync().then(function() {
                      e.push("/menu");
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    O,
                    null,
                    r.a.createElement(w, { src: j.a })
                  );
                }
              }
            ]),
            n
          );
        })(a.Component),
        S = t(47),
        W = t(29),
        C = t.n(W),
        I = t(48),
        L = t(49),
        F = t.n(L),
        D = t(224),
        A = t.n(D),
        G = t(225),
        P = t.n(G),
        T = t(22),
        N = t.n(T),
        M = t(226),
        z = t.n(M),
        U = t(38),
        B = t.n(U),
        _ = t(30),
        Y = t.n(_),
        J = t(64),
        V = t.n(J),
        X = ["A", "E", "I", "O", "U"],
        H = {
          en: [
            "A",
            "B",
            "C",
            "D",
            "E",
            "F",
            "G",
            "H",
            "I",
            "J",
            "K",
            "L",
            "M",
            "N",
            "O",
            "P",
            "Q",
            "R",
            "S",
            "T",
            "U",
            "V",
            "W",
            "X",
            "Y",
            "Z"
          ],
          cz: [
            "A",
            "\xc1",
            "B",
            "C",
            "\u010c",
            "D",
            "\u010e",
            "E",
            "\xc9",
            "\u011a",
            "F",
            "G",
            "H",
            "I",
            "\xcd",
            "J",
            "K",
            "L",
            "M",
            "N",
            "\u0147",
            "O",
            "\xd3",
            "P",
            "Q",
            "R",
            "\u0158",
            "S",
            "\u0160",
            "T",
            "\u0164",
            "U",
            "\xda",
            "\u016e",
            "V",
            "W",
            "X",
            "Y",
            "\xdd",
            "Z",
            "\u017d"
          ]
        },
        K = { en: X, cz: X },
        Q = function(e) {
          for (var n = [], t = 0, a = 0; a < 10; a += 1) {
            if (3 === t || 7 === t) {
              var r = Math.random() * K[e].length + 0;
              n.push({ x: [t, K[e][Math.floor(r)]] });
            } else {
              var o = Math.random() * H[e].length + 0;
              n.push({ x: [t, H[e][Math.floor(o)]] });
            }
            t += 1;
          }
          return n;
        },
        q = function(e, n, t) {
          for (var a = !1, r = 0, o = n[e].length; r < o; r += 1)
            if (z()(n[e][r]) === t) {
              a = !0;
              break;
            }
          return a;
        },
        Z = function(e) {
          return e.sort(function(e, n) {
            return e.valid === n.valid ? 0 : e.valid ? -1 : 1;
          });
        },
        $ = function(e) {
          return e.sort(function(e, n) {
            return (e.valid && !n.valid) || (!e.valid && n.valid)
              ? 0
              : n.text.length - e.text.length;
          });
        },
        ee = function(e, n) {
          for (var t = !1, a = 0, r = e.length; a < r; a += 1)
            e[a].text === n && e[a].valid && (t = !0);
          return t;
        },
        ne = function(e, n) {
          return e.uid.length > 0 && n.uid === e.uid;
        },
        te = function(e) {
          var n = 0;
          return (
            Y()(V()(e), function(t) {
              n += e[t].valid ? e[t].text.length : 0;
            }),
            n
          );
        },
        ae = function(e, n) {
          return !Object.keys(e).length && Object.keys(n).length > 0;
        },
        re = function(e) {
          return {
            uid: e.player.getID(),
            displayName: e.player.getName(),
            photoURL: e.player.getPhoto()
          };
        },
        oe = function(e) {
          return Object.keys(e).length > 0;
        },
        ie = {
          PRELOAD: "Preload",
          MENU: "Menu",
          GAME: "Game",
          WAITING_FOR_OPONENT: "WaitingForOponent"
        };
      function ce() {
        var e = Object(b.a)([
          "\n  width: 30px;\n  height: 20px;\n  object-fit: cover;\n"
        ]);
        return (
          (ce = function() {
            return e;
          }),
          e
        );
      }
      function le() {
        var e = Object(b.a)([
          "\n  width: auto;\n  height: 20px;\n  margin: 10px;\n  border: ",
          ";\n  border-radius: 2px;\n  padding: 1px;\n"
        ]);
        return (
          (le = function() {
            return e;
          }),
          e
        );
      }
      function ue() {
        var e = Object(b.a)([
          "\n  position: absolute;\n  top: 10px;\n  right: 25px;\n  display: flex;\n  flex-direction: row;\n  width: 100px;\n"
        ]);
        return (
          (ue = function() {
            return e;
          }),
          e
        );
      }
      function se() {
        var e = Object(b.a)(["\n  color: white;\n"]);
        return (
          (se = function() {
            return e;
          }),
          e
        );
      }
      function de() {
        var e = Object(b.a)([
          "\n  height: 40px;\n  width: 40px;\n  border-radius: 20px;\n  margin-right: 10px;\n"
        ]);
        return (
          (de = function() {
            return e;
          }),
          e
        );
      }
      function pe() {
        var e = Object(b.a)([
          "\n  position: absolute;\n  left: 10px;\n  top: 10px;\n  padding: 5px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"
        ]);
        return (
          (pe = function() {
            return e;
          }),
          e
        );
      }
      function me() {
        var e = Object(b.a)([
          "\n  background: #1e2942;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n"
        ]);
        return (
          (me = function() {
            return e;
          }),
          e
        );
      }
      var fe = { color: "white", height: 50, marginBottom: 20, marginTop: 40 },
        he = { color: "white", height: 50 },
        ge = v.a.div(me()),
        be = v.a.div(pe()),
        ve = v.a.img(de()),
        ye = v.a.span(se()),
        xe = v.a.div(ue()),
        Oe = v.a.div(le(), function(e) {
          return e.selected ? "2px solid #8ab717" : "2px solid #1e2942";
        }),
        we = v.a.img(ce()),
        Ee = t(325);
      t(371);
      var je = Ee.initializeApp({
          apiKey: "AIzaSyAmVnTqHww15a21oTpq6xJQgHu0opeJ3_M",
          authDomain: "slovnifotbal-23fed.firebaseapp.com",
          databaseURL: "https://slovnifotbal-23fed.firebaseio.com",
          projectId: "slovnifotbal-23fed",
          storageBucket: "slovnifotbal-23fed.appspot.com",
          messagingSenderId: "912034632142"
        }),
        ke = { gameRoomDatabaseRef: {} },
        Re = "SET_GAME_ROOM_DATABASE_REF";
      var Se = window.FBInstant,
        We = (function(e) {
          function n() {
            var e, t;
            Object(p.a)(this, n);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(f.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(r))
              )).state = { language: "en", loading: !1 }),
              (t.handleStartGame = function() {
                var e = t.state.language;
                t.setState({ loading: !0 }),
                  t.gameRoomRef
                    .where("isFull", "==", !1)
                    .where("language", "==", e)
                    .where("waitingForAFriend", "==", !1)
                    .where("leftInWaitingRoom", "==", !1)
                    .limit(1)
                    .get()
                    .then(function(e) {
                      e.empty
                        ? t.createGameRoom()
                        : e.forEach(function(e) {
                            return t.joinGameRoom(e);
                          });
                    });
              }),
              (t.createGameRoom = function() {
                var e = t.props,
                  n = e.history,
                  a = e.dispatch,
                  r = t.state.language,
                  o = Q(r),
                  i = Q(r);
                t.gameRoomRef
                  .add({
                    playerOne: re(Se),
                    playerTwo: { displayName: null, photoURL: null, uid: "" },
                    isFull: !1,
                    waitingForAFriend: !1,
                    leftInWaitingRoom: !1,
                    playerOnePoints: 0,
                    playerTwoPoints: 0,
                    lettersRoundOne: o,
                    lettersRoundOneSetTwo: i,
                    language: r
                  })
                  .then(function(e) {
                    n.push({ pathname: ie.WAITING_FOR_OPONENT }),
                      a({ type: Re, payload: e }),
                      t.setState({ loading: !1 });
                  });
              }),
              (t.joinGameRoom = (function() {
                var e = Object(I.a)(
                  C.a.mark(function e(n) {
                    var a, r, o, i;
                    return C.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return (
                                (a = t.props),
                                (r = a.history),
                                (o = a.dispatch),
                                (i = t.state.language),
                                (e.next = 4),
                                n.ref.update({
                                  playerTwo: re(Se),
                                  isFull: !0,
                                  startedAt: F()().format()
                                })
                              );
                            case 4:
                              r.push({
                                pathname: ie.GAME,
                                state: {
                                  language: i,
                                  playerTwo: !0,
                                  playerOne: !1
                                }
                              }),
                                o({ type: Re, payload: n.ref }),
                                t.setState({ loading: !1 });
                            case 7:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function(n) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.handleChangeLanguage = function(e) {
                t.setState({ language: e });
              }),
              (t.handlePlayWithFriend = Object(I.a)(
                C.a.mark(function e() {
                  var n, t, a;
                  return C.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), Se.context.chooseAsync();
                          case 2:
                            return (
                              e.sent, (e.next = 5), Se.context.getPlayersAsync()
                            );
                          case 5:
                            (n = e.sent),
                              (t = n.map(function(e) {
                                return {
                                  uid: e.getID(),
                                  displayName: e.getName(),
                                  photoURL: e.getPhoto()
                                };
                              })),
                              (a = t.find(function(e) {
                                return e.uid !== Se.player.getID();
                              })),
                              Se.context.createAsync(a.uid).then(function() {
                                console.log(
                                  "FBInstant.context.getID()",
                                  Se.context.getID()
                                );
                              }),
                              console.log("playerToInvite", a),
                              Se.updateAsync({
                                action: "CUSTOM",
                                cta: "Join The Game",
                                image: btoa(j.a),
                                text: {
                                  default: "Your friend invited you",
                                  localizations: {
                                    en_US: "Your friend invited you"
                                  }
                                },
                                template: "GAME_INVITE",
                                data: { gameRoomId: "111" },
                                strategy: "IMMEDIATE",
                                notification: "NO_PUSH"
                              }).then(function() {
                                console.log("here");
                              });
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              t
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  this.gameRoomRef = je.firestore().collection("game_room");
                }
              },
              {
                key: "componentWillUnmountMount",
                value: function() {
                  this.gameRoomRef = null;
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this,
                    n = this.state,
                    t = n.language,
                    a = n.loading;
                  return r.a.createElement(
                    ge,
                    null,
                    r.a.createElement(
                      be,
                      null,
                      r.a.createElement(ve, { src: Se.player.getPhoto() }),
                      r.a.createElement(ye, null, Se.player.getName())
                    ),
                    r.a.createElement(
                      N.a,
                      {
                        variant: "contained",
                        disabled: a,
                        style: Object(S.a)({}, fe, {
                          backgroundColor: a ? "#CFCFCF" : "#8FB842"
                        }),
                        onClick: this.handleStartGame
                      },
                      "Find opponent"
                    ),
                    r.a.createElement(
                      N.a,
                      {
                        size: "small",
                        variant: "text",
                        disabled: a,
                        style: he,
                        onClick: this.handlePlayWithFriend
                      },
                      "Play with a friend"
                    ),
                    r.a.createElement(
                      xe,
                      null,
                      r.a.createElement(
                        Oe,
                        {
                          selected: "cz" === t,
                          onClick: function() {
                            return e.handleChangeLanguage("cz");
                          }
                        },
                        r.a.createElement(we, { src: A.a })
                      ),
                      r.a.createElement(
                        Oe,
                        {
                          selected: "en" === t,
                          onClick: function() {
                            return e.handleChangeLanguage("en");
                          }
                        },
                        r.a.createElement(we, { src: P.a })
                      )
                    )
                  );
                }
              }
            ]),
            n
          );
        })(a.Component),
        Ce = Object(s.b)()(We),
        Ie = t(93),
        Le = t(227),
        Fe = t.n(Le);
      function De() {
        var e = Object(b.a)([
          "\n  color: white;\n  text-align: center;\n  font-size: 20px;\n  margin-top: 13px;\n  margin-bottom: 6px;\n  line-height: 10px;\n"
        ]);
        return (
          (De = function() {
            return e;
          }),
          e
        );
      }
      function Ae() {
        var e = Object(b.a)([
          "\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 7px;\n"
        ]);
        return (
          (Ae = function() {
            return e;
          }),
          e
        );
      }
      function Ge() {
        var e = Object(b.a)([
          "\n  background: black;\n  height: 100vh;\n  width: 35px;\n  display: flex;\n  align-items: start;\n  justify-content: center;\n"
        ]);
        return (
          (Ge = function() {
            return e;
          }),
          e
        );
      }
      function Pe() {
        var e = Object(b.a)([
          "\n  font-size: 20px;\n  color: white;\n  font-weight: bold;\n"
        ]);
        return (
          (Pe = function() {
            return e;
          }),
          e
        );
      }
      function Te() {
        var e = Object(b.a)([
          "\n  background: #233454;\n  height: 65px;\n  margin-top: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: row;\n"
        ]);
        return (
          (Te = function() {
            return e;
          }),
          e
        );
      }
      function Ne() {
        var e = Object(b.a)(["\n  width: 100%;\n  overflow: scroll;\n"]);
        return (
          (Ne = function() {
            return e;
          }),
          e
        );
      }
      function Me() {
        var e = Object(b.a)([
          "\n  display: flex;\n  flex: 1;\n  background: #23232f;\n  margin: 8px;\n  margin-top: 0px;\n  border-radius: 10px;\n"
        ]);
        return (
          (Me = function() {
            return e;
          }),
          e
        );
      }
      function ze() {
        var e = Object(b.a)([
          "\n  display: flex;\n  flex: 1;\n  background: #23232f;\n  margin: 8px;\n  margin-top: 0px;\n  border-radius: 10px;\n"
        ]);
        return (
          (ze = function() {
            return e;
          }),
          e
        );
      }
      function Ue() {
        var e = Object(b.a)([
          "\n  display: flex;\n  flex: 1;\n  margin: 10px;\n  margin-top: 0px;\n  flex-direction: row;\n"
        ]);
        return (
          (Ue = function() {
            return e;
          }),
          e
        );
      }
      function Be() {
        var e = Object(b.a)([
          "\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n"
        ]);
        return (
          (Be = function() {
            return e;
          }),
          e
        );
      }
      function _e() {
        var e = Object(b.a)([
          "\n  font-weight: 500;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 3px;\n"
        ]);
        return (
          (_e = function() {
            return e;
          }),
          e
        );
      }
      function Ye() {
        var e = Object(b.a)([
          "\n  background: #717171;\n  width: ",
          ";\n  height: 40px;\n  border-top-left-radius: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 200ms;\n  &:active {\n    opacity: 0.3;\n  }\n"
        ]);
        return (
          (Ye = function() {
            return e;
          }),
          e
        );
      }
      function Je() {
        var e = Object(b.a)([
          "\n  font-weight: 500;\n  font-size: 14px;\n  color: white;\n  letter-spacing: 3px;\n"
        ]);
        return (
          (Je = function() {
            return e;
          }),
          e
        );
      }
      function Ve() {
        var e = Object(b.a)([
          "\n  background: #717171;\n  width: ",
          ";\n  height: 40px;\n  border-top-right-radius: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"
        ]);
        return (
          (Ve = function() {
            return e;
          }),
          e
        );
      }
      function Xe() {
        var e = Object(b.a)([
          "\n  background: #717171;\n  width: ",
          ";\n  height: 45px;\n  border-top-right-radius: 7px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: 200ms;\n  &:active {\n    opacity: 0.3;\n  }\n"
        ]);
        return (
          (Xe = function() {
            return e;
          }),
          e
        );
      }
      function He() {
        var e = Object(b.a)([
          "\n  font-weight: bold;\n  font-size: 16px;\n  color: white;\n  letter-spacing: 7px;\n"
        ]);
        return (
          (He = function() {
            return e;
          }),
          e
        );
      }
      function Ke() {
        var e = Object(b.a)([
          "\n  background: rgba(138, 182, 24, 0.85);\n  border-radius: 20px;\n  padding: 13px 15px;\n  padding-right: 8px;\n  margin-bottom: 7px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"
        ]);
        return (
          (Ke = function() {
            return e;
          }),
          e
        );
      }
      function Qe() {
        var e = Object(b.a)([
          "\n  position: absolute;\n  bottom: 65px;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  flex-direction: row;\n"
        ]);
        return (
          (Qe = function() {
            return e;
          }),
          e
        );
      }
      function qe() {
        var e = Object(b.a)(["\n  color: ", ";\n  font-size: 10px;\n"]);
        return (
          (qe = function() {
            return e;
          }),
          e
        );
      }
      function Ze() {
        var e = Object(b.a)([
          "\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  border: 1px solid #3b3c45;\n"
        ]);
        return (
          (Ze = function() {
            return e;
          }),
          e
        );
      }
      function $e() {
        var e = Object(b.a)([
          "\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  border: 1px solid ",
          ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"
        ]);
        return (
          ($e = function() {
            return e;
          }),
          e
        );
      }
      function en() {
        var e = Object(b.a)([
          "\n  width: 20px;\n  height: 20px;\n  border-radius: 5px;\n  border: 1px solid ",
          ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"
        ]);
        return (
          (en = function() {
            return e;
          }),
          e
        );
      }
      function nn() {
        var e = Object(b.a)([
          "\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  margin-bottom: 8px;\n  padding: 0 10px;\n"
        ]);
        return (
          (nn = function() {
            return e;
          }),
          e
        );
      }
      function tn() {
        var e = Object(b.a)([
          "\n  font-weight: 500;\n  font-size: 17px;\n  color: white;\n"
        ]);
        return (
          (tn = function() {
            return e;
          }),
          e
        );
      }
      function an() {
        var e = Object(b.a)([
          "\n  width: 40px;\n  height: 40px;\n  border-radius: 15px;\n  border: ",
          ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  opacity: ",
          ";\n  transition: 150ms;\n  &:active {\n    opacity: ",
          "\n"
        ]);
        return (
          (an = function() {
            return e;
          }),
          e
        );
      }
      function rn() {
        var e = Object(b.a)([
          "\n  background: #233454;\n  height: 65px;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 15px;\n  margin-top: 45px;\n"
        ]);
        return (
          (rn = function() {
            return e;
          }),
          e
        );
      }
      function on() {
        var e = Object(b.a)([
          "\n  margin-top: 5px;\n  color: ",
          ";\n  font-weight: 400;\n  font-size: 12px;\n"
        ]);
        return (
          (on = function() {
            return e;
          }),
          e
        );
      }
      function cn() {
        var e = Object(b.a)([
          "\n  display: flex;\n  background: #233454;\n  height: 75px;\n  width: 110px;\n  margin-top: -10px;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  position: absolute;\n  left: calc(100% / 2 - 60px);\n  top: 0;\n  border-bottom-left-radius: 7px;\n  border-bottom-right-radius: 7px;\n"
        ]);
        return (
          (cn = function() {
            return e;
          }),
          e
        );
      }
      function ln() {
        var e = Object(b.a)([
          "\n  color: white;\n  font-style: 15px;\n  padding-left: 15px;\n"
        ]);
        return (
          (ln = function() {
            return e;
          }),
          e
        );
      }
      function un() {
        var e = Object(b.a)([
          "\n  margin-top: 10px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n"
        ]);
        return (
          (un = function() {
            return e;
          }),
          e
        );
      }
      function sn() {
        var e = Object(b.a)([
          "\n  display: flex;\n  flex-direction: row;\n  padding: 10px;\n  margin: 3px;\n  margin-bottom: 10px;\n  justify-content: space-between;\n  position: relative;\n"
        ]);
        return (
          (sn = function() {
            return e;
          }),
          e
        );
      }
      function dn() {
        var e = Object(b.a)([
          "\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  margin: 0 10px;\n  margin-right: 0px;\n  border: ",
          ";\n  z-index: 3;\n"
        ]);
        return (
          (dn = function() {
            return e;
          }),
          e
        );
      }
      function pn() {
        var e = Object(b.a)([
          "\n  background: #1e2942;\n  width: 100%;\n  height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"
        ]);
        return (
          (pn = function() {
            return e;
          }),
          e
        );
      }
      var mn = { color: "white", marginRight: 13 },
        fn = v.a.div(pn()),
        hn = v.a.img(dn(), function(e) {
          return e.opponent ? "3px solid #D28B11" : "3px solid #8ab618";
        }),
        gn = v.a.div(sn()),
        bn = v.a.div(un()),
        vn = v.a.span(ln()),
        yn = v.a.div(cn()),
        xn = v.a.span(on(), function(e) {
          return e.last10sec ? "red" : "#04cbf4";
        }),
        On = v.a.div(rn()),
        wn = v.a.div(
          an(),
          function(e) {
            return e.newWords ? "2px solid #D28B11" : "2px solid #8ab618";
          },
          function(e) {
            return e.clicked ? 0 : 1;
          },
          function(e) {
            var n = e.hasNewWords;
            return e.clicked ? 0 : n ? "1" : "0.6";
          }
        ),
        En = v.a.span(tn()),
        jn = v.a.div(nn()),
        kn = v.a.div(en(), function(e) {
          return e.empty ? "#3b3c45" : "#D28B11";
        }),
        Rn = v.a.div($e(), function(e) {
          return e.empty ? "#3b3c45" : "#8ab618";
        }),
        Sn = (v.a.div(Ze()),
        v.a.span(qe(), function(e) {
          return e.empty ? "rgba(255,255,255,.3)" : "white";
        })),
        Wn = v.a.div(Qe()),
        Cn = v.a.div(Ke()),
        In = v.a.span(He()),
        Ln = v.a.div(Xe(), function(e) {
          return e.gameEnded ? "180px" : "90px";
        }),
        Fn = (v.a.div(Ve(), function(e) {
          return e.gameEnded ? "180px" : "90px";
        }),
        v.a.span(Je())),
        Dn = v.a.div(Ye(), function(e) {
          return e.gameEnded ? "180px" : "90px";
        }),
        An = (v.a.span(_e()), v.a.div(Be())),
        Gn = v.a.div(Ue()),
        Pn = v.a.div(ze()),
        Tn = v.a.div(Me()),
        Nn = v.a.div(Ne()),
        Mn = v.a.div(Te()),
        zn = v.a.span(Pe()),
        Un = v.a.div(Ge()),
        Bn = v.a.div(Ae()),
        _n = v.a.div(De()),
        Yn = 120,
        Jn = (function(e) {
          function n() {
            var e, t;
            Object(p.a)(this, n);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(f.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(r))
              )).state = { timerValueInSeconds: Yn }),
              (t.onGameStarted = function() {
                var e = t.props,
                  n = e.onGameEnded,
                  a = e.gameRoomState;
                t.timer = setInterval(function() {
                  var e = F()().diff(F()(a.startedAt)),
                    r = Yn - Math.floor(F.a.duration(e).asSeconds());
                  if (0 === r)
                    return n(), clearInterval(t.timer), void (t.timer = null);
                  t.setState({ timerValueInSeconds: r });
                }, 1e3);
              }),
              t
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  this.props.location.state.playerOne && this.onGameStarted();
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var n = this.props,
                    t = n.gameRoomState,
                    a = n.location;
                  !B()(e.gameRoomState, "startedAt", !1) &&
                    t.startedAt &&
                    a.state.playerTwo &&
                    this.onGameStarted();
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  clearInterval(this.timer), (this.timer = null);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.timerValueInSeconds,
                    n = this.props,
                    t = n.gameEnded,
                    a = n.gameRoomState,
                    o = a.playerOnePoints,
                    i = a.playerTwoPoints,
                    c = n.amIPlayerOne,
                    l = e <= 10,
                    u = c ? o : i,
                    s = c ? i : o;
                  return r.a.createElement(
                    yn,
                    null,
                    r.a.createElement(_n, null, u, " - ", s),
                    r.a.createElement(
                      xn,
                      { last10sec: !t && l, gameEnded: t },
                      t ? "Game Finished" : F.a.utc(1e3 * e).format("mm:ss")
                    )
                  );
                }
              }
            ]),
            n
          );
        })(r.a.Component),
        Vn = Object(s.b)(function(e) {
          return e;
        })(Jn),
        Xn = (function(e) {
          function n() {
            return (
              Object(p.a)(this, n),
              Object(f.a)(this, Object(h.a)(n).apply(this, arguments))
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    n = e.gameRoomState,
                    t = e.user,
                    a = e.gameEnded,
                    o = e.onGameEnded,
                    i = e.location,
                    c = e.amIPlayerOne,
                    l = n.playerTwo,
                    u = n.playerOne;
                  return r.a.createElement(
                    gn,
                    null,
                    r.a.createElement(
                      bn,
                      null,
                      r.a.createElement(hn, { src: t.photoURL }),
                      r.a.createElement(
                        Bn,
                        null,
                        r.a.createElement(vn, null, t.displayName)
                      )
                    ),
                    r.a.createElement(Vn, {
                      gameRoomState: n,
                      gameEnded: a,
                      onGameEnded: o,
                      location: i,
                      amIPlayerOne: c
                    }),
                    r.a.createElement(
                      bn,
                      null,
                      r.a.createElement(
                        vn,
                        null,
                        c ? l.displayName : u.displayName
                      ),
                      r.a.createElement(hn, {
                        opponent: !0,
                        source: c ? l.photoURL : u.photoURL
                      })
                    )
                  );
                }
              }
            ]),
            n
          );
        })(a.Component),
        Hn = t(57),
        Kn = t(65),
        Qn = t(46),
        qn = t.n(Qn),
        Zn = t(66),
        $n = t.n(Zn),
        et = t(228),
        nt = t.n(et),
        tt = t(229),
        at = t.n(tt),
        rt = t(231),
        ot = t.n(rt),
        it = t(137),
        ct = t.n(it),
        lt = t(95),
        ut = t.n(lt),
        st = t(99),
        dt = t.n(st),
        pt = t(97),
        mt = t.n(pt),
        ft = t(98),
        ht = t.n(ft),
        gt = t(96),
        bt = t.n(gt),
        vt = t(230),
        yt = t.n(vt),
        xt = t(94),
        Ot = t.n(xt);
      function wt(e) {
        return r.a.createElement(Ot.a, Object.assign({ direction: "up" }, e));
      }
      var Et = (function(e) {
          function n() {
            var e, t;
            Object(p.a)(this, n);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(f.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(r))
              )).state = { open: !1 }),
              (t.handleOpenModal = function() {
                t.setState({ open: !0 });
              }),
              (t.handleConfirm = function() {
                var e = t.props.hadleGetNewWords;
                t.setState({ open: !1 }), e();
              }),
              (t.handleClose = function() {
                t.setState({ open: !1 });
              }),
              t
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "render",
                value: function() {
                  var e = this.props.newWords;
                  return r.a.createElement(
                    a.Fragment,
                    null,
                    r.a.createElement(
                      wn,
                      {
                        key: 15,
                        clicked: !1,
                        disabled: e,
                        onClick: e ? ct.a : this.handleOpenModal,
                        newWords: !0,
                        hasNewWords: e,
                        style: { borderColor: e ? "#696969" : "#D28B11" }
                      },
                      r.a.createElement(
                        En,
                        { style: { color: e ? "#696969" : "white" } },
                        r.a.createElement(yt.a, {
                          style: { marginTop: 4 },
                          size: 25
                        })
                      )
                    ),
                    r.a.createElement(
                      ut.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        TransitionComponent: wt,
                        keepMounted: !0,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                      },
                      r.a.createElement(
                        bt.a,
                        { id: "alert-dialog-title" },
                        "Get new set of letters?"
                      ),
                      r.a.createElement(
                        mt.a,
                        null,
                        r.a.createElement(
                          ht.a,
                          null,
                          "No more words ? You can get new set of letters,",
                          r.a.createElement("br", null),
                          "but only once per game."
                        )
                      ),
                      r.a.createElement(
                        dt.a,
                        null,
                        r.a.createElement(
                          N.a,
                          {
                            onClick: this.handleClose,
                            style: { color: "#8ab618" }
                          },
                          "Not yet"
                        ),
                        r.a.createElement(
                          N.a,
                          {
                            onClick: this.handleConfirm,
                            style: { color: "#8ab618" }
                          },
                          "Get new letters"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            n
          );
        })(r.a.Component),
        jt = {
          handleFinishWatchingAd: !1,
          userWatchedAd: !1,
          choosenLetters: [],
          clickedLetterIndexes: [!1, !1, !1, !1, !1, !1, !1, !1, !1, !1, !1]
        },
        kt = (function(e) {
          function n() {
            var e;
            return (
              Object(p.a)(this, n),
              ((e = Object(f.a)(this, Object(h.a)(n).call(this))).state = jt),
              (e.handleLetterClick = function(n) {
                var t = n[0],
                  a = n[1],
                  r = e.state,
                  o = r.choosenLetters,
                  i = r.clickedLetterIndexes;
                if (!i[a]) {
                  var c = [].concat(Object(Hn.a)(o), [t]),
                    l = Object(Hn.a)(i);
                  (l[a] = !0),
                    e.setState({ choosenLetters: c, clickedLetterIndexes: l });
                }
              }),
              (e.handleDeletePress = function() {
                var n = e.state,
                  t = n.choosenLetters,
                  a = n.clickedLetterIndexes;
                if (0 !== t.length) {
                  var r = Object(Hn.a)(t),
                    o = Object(Hn.a)(a);
                  (o[r[r.length - 1][0]] = !1),
                    r.splice(-1, 1),
                    e.setState({ choosenLetters: r, clickedLetterIndexes: o });
                }
              }),
              (e.handleFinishWatchingAd = function() {
                e.setState({ userWatchedAd: !0 });
              }),
              (e.handleSendClick = function() {
                var n = e.state.choosenLetters,
                  t = e.props,
                  a = t.validWords,
                  r = t.words,
                  o = t.gameRoomState,
                  i = t.setParentState,
                  c = t.gameRoomDatabaseRef,
                  l = t.amIPlayerOne;
                if (0 !== n.length) {
                  var u = Y()(n, function(e) {
                      return qn()(e[1]);
                    }).join(),
                    s = $n()(u, ",").join("");
                  if (!ee(a, s)) {
                    var d = q(o.language, r, s),
                      p = [].concat(Object(Hn.a)(a), [{ text: s, valid: d }]),
                      m = {};
                    l && (m.playerOnePoints = te(p)),
                      l || (m.playerTwoPoints = te(p)),
                      console.log(m),
                      d && c.update(Object(S.a)({}, m)),
                      i({ validWords: $(Z(p)) }),
                      e.setState({
                        choosenLetters: jt.choosenLetters,
                        clickedLetterIndexes: jt.clickedLetterIndexes
                      });
                  }
                }
              }),
              (e.handleLetterClick = at()(
                e.handleLetterClick.bind(Object(Kn.a)(Object(Kn.a)(e))),
                200
              )),
              e
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "render",
                value: function() {
                  var e = this,
                    n = this.state,
                    t = n.choosenLetters,
                    o = n.clickedLetterIndexes,
                    i = this.props,
                    c = i.opponentPoints,
                    l = i.myPoints,
                    u = i.newWords,
                    s = i.gameRoomState,
                    d = i.iWon,
                    p = i.isDraw,
                    m = i.opponentFinished,
                    f = i.hadleGetNewWords,
                    h = i.opponentDidNotFinish,
                    g = this.props.gameEnded,
                    b = s.playerOneLeft || s.playerTwoLeft;
                  return (
                    b && (g = !0),
                    r.a.createElement(
                      a.Fragment,
                      null,
                      g &&
                        b &&
                        r.a.createElement(
                          Mn,
                          null,
                          r.a.createElement(
                            zn,
                            null,
                            "Your win opponent left the game"
                          )
                        ),
                      g &&
                        !m &&
                        !h &&
                        r.a.createElement(
                          Mn,
                          null,
                          r.a.createElement(ot.a, { style: mn, size: 15 }),
                          r.a.createElement(
                            zn,
                            null,
                            "Waiting for your opponent"
                          )
                        ),
                      g &&
                        (m || h) &&
                        r.a.createElement(
                          a.Fragment,
                          null,
                          r.a.createElement(
                            Wn,
                            null,
                            r.a.createElement(
                              Ln,
                              { gameEnded: g, onClick: this.goHome },
                              r.a.createElement(Fn, null, "GO BACK TO MENU")
                            )
                          ),
                          r.a.createElement(
                            Mn,
                            null,
                            r.a.createElement(
                              zn,
                              null,
                              p
                                ? "It is draw. Your both had ".concat(
                                    l,
                                    " points."
                                  )
                                : d
                                ? "You win with "
                                    .concat(l, " points. Your opponent had ")
                                    .concat(c, " points.")
                                : "You lost with "
                                    .concat(l, " points. Your opponent had ")
                                    .concat(c, " points.")
                            )
                          )
                        ),
                      !g &&
                        r.a.createElement(
                          a.Fragment,
                          null,
                          r.a.createElement(
                            On,
                            null,
                            r.a.createElement(Et, {
                              hadleGetNewWords: f,
                              newWords: u
                            }),
                            Y()(
                              u ? s.lettersRoundOne : s.lettersRoundOneSetTwo,
                              function(n, t) {
                                return r.a.createElement(
                                  wn,
                                  {
                                    key: t,
                                    clicked: o[t],
                                    disabled: o[t],
                                    onClick: nt()(e.handleLetterClick, [n.x, t])
                                  },
                                  r.a.createElement(En, null, n.x[1])
                                );
                              }
                            )
                          ),
                          r.a.createElement(
                            Wn,
                            null,
                            r.a.createElement(
                              Ln,
                              { onClick: this.handleDeletePress },
                              r.a.createElement(Fn, null, "DELETE")
                            ),
                            t.length > 0 &&
                              r.a.createElement(
                                Cn,
                                null,
                                r.a.createElement(
                                  In,
                                  null,
                                  Y()(t, function(e) {
                                    return qn()(e[1]);
                                  })
                                )
                              ),
                            r.a.createElement(
                              Dn,
                              { onClick: this.handleSendClick },
                              r.a.createElement(
                                Fn,
                                null,
                                g ? "GO BACK TO MENU" : "SEND"
                              )
                            )
                          )
                        )
                    )
                  );
                }
              }
            ]),
            n
          );
        })(a.Component),
        Rt = (function(e) {
          function n() {
            return (
              Object(p.a)(this, n),
              Object(f.a)(this, Object(h.a)(n).apply(this, arguments))
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "render",
                value: function() {
                  var e = this.props,
                    n = e.validWords,
                    t = e.gameEnded,
                    a = e.opponentWords;
                  return r.a.createElement(
                    An,
                    null,
                    r.a.createElement(
                      Gn,
                      null,
                      r.a.createElement(
                        Pn,
                        null,
                        r.a.createElement(
                          Nn,
                          null,
                          r.a.createElement("div", { style: { height: 10 } }),
                          Y()(n, function(e, n) {
                            for (
                              var t = [], a = 0, o = 10 - e.text.length;
                              a < o;
                              a += 1
                            )
                              t[a] = r.a.createElement(Rn, {
                                empty: !0,
                                key: a + 20
                              });
                            return r.a.createElement(
                              jn,
                              { key: n },
                              Y()($n()(e.text, ""), function(n, t) {
                                return r.a.createElement(
                                  Rn,
                                  { key: t, empty: !e.valid },
                                  r.a.createElement(Sn, { empty: !e.valid }, n)
                                );
                              }),
                              t
                            );
                          }),
                          r.a.createElement("div", { style: { height: 10 } })
                        )
                      ),
                      r.a.createElement(
                        Tn,
                        null,
                        r.a.createElement(
                          Nn,
                          null,
                          r.a.createElement("div", { style: { height: 10 } }),
                          t &&
                            Y()(a, function(e, n) {
                              for (
                                var t = [], a = 0, o = 10 - e.text.length;
                                a < o;
                                a += 1
                              )
                                t[a] = r.a.createElement(kn, {
                                  empty: !0,
                                  key: a + 20
                                });
                              return r.a.createElement(
                                jn,
                                { key: n },
                                Y()($n()(e.text, ""), function(n, t) {
                                  return r.a.createElement(
                                    kn,
                                    { key: t, empty: !e.valid },
                                    r.a.createElement(
                                      Sn,
                                      { empty: !e.valid },
                                      n
                                    )
                                  );
                                }),
                                t
                              );
                            }),
                          r.a.createElement("div", { style: { height: 10 } })
                        )
                      )
                    )
                  );
                }
              }
            ]),
            n
          );
        })(a.Component),
        St = t(232),
        Wt = t.n(St),
        Ct = t(233),
        It = t.n(Ct);
      function Lt(e) {
        return r.a.createElement(Ot.a, Object.assign({ direction: "up" }, e));
      }
      var Ft = (function(e) {
          function n() {
            var e, t;
            Object(p.a)(this, n);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(f.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(r))
              )).state = { open: !1 }),
              (t.handleOpenModal = function() {
                t.setState({ open: !0 });
              }),
              (t.handleLeave = function() {
                (0, t.props.onLeave)();
              }),
              (t.handleClose = function() {
                t.setState({ open: !1 });
              }),
              t
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "render",
                value: function() {
                  return r.a.createElement(
                    Un,
                    null,
                    r.a.createElement(
                      Wt.a,
                      {
                        "aria-label": "Settings",
                        onClick: this.handleOpenModal,
                        style: { color: "white", opacity: 0.8 }
                      },
                      r.a.createElement(It.a, { size: 5 })
                    ),
                    r.a.createElement(
                      ut.a,
                      {
                        open: this.state.open,
                        onClose: this.handleClose,
                        TransitionComponent: Lt,
                        keepMounted: !0,
                        "aria-labelledby": "alert-dialog-title",
                        "aria-describedby": "alert-dialog-description"
                      },
                      r.a.createElement(
                        bt.a,
                        { id: "alert-dialog-title" },
                        "Leave the game?"
                      ),
                      r.a.createElement(
                        mt.a,
                        null,
                        r.a.createElement(
                          ht.a,
                          null,
                          "By leaving you will automatically loose."
                        )
                      ),
                      r.a.createElement(
                        dt.a,
                        null,
                        r.a.createElement(
                          N.a,
                          {
                            onClick: this.handleClose,
                            style: { color: "#8ab618" }
                          },
                          "Keep playing"
                        ),
                        r.a.createElement(
                          N.a,
                          {
                            onClick: this.handleLeave,
                            style: { color: "#8ab618" }
                          },
                          "Leave"
                        )
                      )
                    )
                  );
                }
              }
            ]),
            n
          );
        })(r.a.Component),
        Dt = window.FBInstant,
        At = { cz: "czechhWords", en: "englishWords" },
        Gt = {
          cz:
            "https://raw.githubusercontent.com/paserak73/slovniFotbalWordLists/master/wordsCzech.js",
          en:
            "https://raw.githubusercontent.com/paserak73/slovniFotbalWordLists/master/wordsEnglish.js"
        },
        Pt = (function(e) {
          function n() {
            var e, t;
            Object(p.a)(this, n);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(f.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(r))
              )).state = {
                opponentDidNotFinish: !1,
                gameRoomState: !1,
                gameStarted: !1,
                gameEnded: !1,
                newWords: !1,
                validWords: [],
                words: { cz: [], en: [] }
              }),
              (t.user = re(Dt)),
              (t.getGameRoomState = function(e) {
                oe(e) &&
                  e.onSnapshot(function(e) {
                    var n = e.data();
                    t.getWordVocabulary(n.language),
                      t.setState({ gameRoomState: n });
                  });
              }),
              (t.getWordVocabulary = (function() {
                var e = Object(I.a)(
                  C.a.mark(function e(n) {
                    var a, r, o;
                    return C.a.wrap(
                      function(e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((a = At[n]), !(r = localStorage.getItem(a)))
                              ) {
                                e.next = 5;
                                break;
                              }
                              return (
                                t.setWords(n, JSON.parse(r)), e.abrupt("return")
                              );
                            case 5:
                              return (e.next = 7), Fe.a.get(Gt[n]);
                            case 7:
                              (o = e.sent),
                                console.log("apiCall", o),
                                t.setWords(n, o.data),
                                localStorage.setItem(a, JSON.stringify(o.data));
                            case 11:
                            case "end":
                              return e.stop();
                          }
                      },
                      e,
                      this
                    );
                  })
                );
                return function(n) {
                  return e.apply(this, arguments);
                };
              })()),
              (t.setWords = function(e, n) {
                var a = t.state.words,
                  r = Object(S.a)({}, a, Object(Ie.a)({}, e, n));
                t.setState({ words: r });
              }),
              (t.onGameEnded = function() {
                var e = t.props.gameRoomDatabaseRef,
                  n = t.state,
                  a = n.validWords,
                  r = n.gameRoomState.playerOne.uid === t.user.uid,
                  o = {};
                r && (o.roundOnePlayerOneWords = a),
                  r || (o.roundOnePlayerTwoWords = a),
                  t.setState({ gameEnded: !0 }),
                  e.update(o),
                  (t.intervalForOpponentFinish = setTimeout(function() {
                    t.setState({ opponentDidNotFinish: !0 });
                  }, 5e3));
              }),
              (t.hadleGetNewWords = function() {
                return t.setState({ newWords: !0 });
              }),
              (t.setParentState = function(e) {
                return t.setState(Object(S.a)({}, e));
              }),
              (t.handleLeaveTheGame = function() {
                var e = t.state.gameRoomState,
                  n = t.props,
                  a = n.history,
                  r = n.gameRoomDatabaseRef,
                  o = n.dispatch,
                  i = ne(t.user, e.playerOne),
                  c = {};
                i && (c.playerOneLeft = !0),
                  i || (c.playerTwoLeft = !0),
                  r.update(c),
                  o({ type: Re, payload: {} }),
                  a.push(ie.MENU);
              }),
              t
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "componentDidMount",
                value: function() {
                  var e = this.props,
                    n = e.gameRoomDatabaseRef;
                  e.location.state.playerOne && this.getGameRoomState(n);
                }
              },
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var n = this.props,
                    t = n.gameRoomDatabaseRef,
                    a = n.location;
                  ae(e.gameRoomDatabaseRef, t) &&
                    a.state.playerTwo &&
                    this.getGameRoomState(t);
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state,
                    n = e.gameRoomState,
                    t = e.gameStarted,
                    o = e.gameEnded,
                    i = e.validWords,
                    c = e.words,
                    l = e.newWords,
                    u = e.opponentDidNotFinish,
                    s = this.props,
                    d = s.location,
                    p = s.gameRoomDatabaseRef,
                    m = 0,
                    f = 0;
                  if (!n) return r.a.createElement(fn, null);
                  var h = ne(this.user, n.playerOne),
                    g = (function(e, n) {
                      return e
                        ? B()(n, "roundOnePlayerTwoWords")
                        : B()(n, "roundOnePlayerOneWords");
                    })(h, n),
                    b = (function(e, n) {
                      return e
                        ? B()(n, "roundOnePlayerTwoWords", !1)
                        : B()(n, "roundOnePlayerOneWords", !1);
                    })(h, n);
                  o && b && ((m = te(g)), (f = te(i)));
                  var v = f > m,
                    y = f === m;
                  return (
                    console.log("index game gameRoomState", n),
                    r.a.createElement(
                      a.Fragment,
                      null,
                      r.a.createElement(
                        fn,
                        null,
                        n &&
                          Object.keys(p).length > 0 &&
                          r.a.createElement(
                            a.Fragment,
                            null,
                            r.a.createElement(Xn, {
                              onGameEnded: this.onGameEnded,
                              gameStarted: t,
                              gameEnded: o,
                              gameRoomState: n,
                              user: re(Dt),
                              location: d,
                              amIPlayerOne: h
                            }),
                            r.a.createElement(Rt, {
                              validWords: i,
                              gameEnded: i,
                              opponentWords: g
                            }),
                            r.a.createElement(kt, {
                              opponentPoints: m,
                              myPoints: f,
                              iWon: v,
                              isDraw: y,
                              opponentFinished: b,
                              validWords: i,
                              words: c,
                              gameEnded: o,
                              gameRoomState: n,
                              setParentState: this.setParentState,
                              hadleGetNewWords: this.hadleGetNewWords,
                              opponentDidNotFinish: u,
                              gameRoomDatabaseRef: p,
                              newWords: l,
                              amIPlayerOne: h
                            })
                          )
                      ),
                      r.a.createElement(Ft, {
                        onLeave: this.handleLeaveTheGame
                      })
                    )
                  );
                }
              }
            ]),
            n
          );
        })(a.Component),
        Tt = Object(s.b)(function(e) {
          return e;
        })(Pt),
        Nt = t(234),
        Mt = t.n(Nt);
      function zt() {
        var e = Object(b.a)([
          "\n  position: absolute;\n  left: 10px;\n  top: 10px;\n"
        ]);
        return (
          (zt = function() {
            return e;
          }),
          e
        );
      }
      function Ut() {
        var e = Object(b.a)(["\n  color: white;\n  margin-bottom: 20px;\n"]);
        return (
          (Ut = function() {
            return e;
          }),
          e
        );
      }
      function Bt() {
        var e = Object(b.a)([
          "\n  background: #1e2942;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"
        ]);
        return (
          (Bt = function() {
            return e;
          }),
          e
        );
      }
      var _t = v.a.div(Bt()),
        Yt = v.a.span(Ut()),
        Jt = v.a.div(zt()),
        Vt = (function(e) {
          function n() {
            var e, t;
            Object(p.a)(this, n);
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++)
              r[o] = arguments[o];
            return (
              ((t = Object(f.a)(
                this,
                (e = Object(h.a)(n)).call.apply(e, [this].concat(r))
              )).handleBack = Object(I.a)(
                C.a.mark(function e() {
                  var n, a;
                  return C.a.wrap(
                    function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (n = t.props),
                              (a = n.gameRoomDatabaseRef),
                              n.history.push({ pathname: ie.MENU }),
                              (e.next = 4),
                              a.update({ leftInWaitingRoom: !0 })
                            );
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    this
                  );
                })
              )),
              t
            );
          }
          return (
            Object(g.a)(n, e),
            Object(m.a)(n, [
              {
                key: "componentDidUpdate",
                value: function(e) {
                  var n = this.props,
                    t = n.gameRoomDatabaseRef,
                    a = n.history;
                  ae(e.gameRoomDatabaseRef, t) &&
                    oe(t) &&
                    t.onSnapshot(function(e) {
                      var n = e.data();
                      !n.isFull ||
                        n.playerOneLeft ||
                        n.playerTwoLeft ||
                        a.push({
                          pathname: ie.GAME,
                          state: { playerOne: !0, playerTwo: !1 }
                        });
                    });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.props.location.waitingForAFriend;
                  return r.a.createElement(
                    _t,
                    null,
                    r.a.createElement(
                      Jt,
                      null,
                      r.a.createElement(
                        N.a,
                        {
                          onClick: this.handleBack,
                          variant: "text",
                          style: { color: "white" }
                        },
                        r.a.createElement(Mt.a, { size: 17 }),
                        "Cancel"
                      )
                    ),
                    r.a.createElement(
                      Yt,
                      null,
                      e
                        ? "Share a link with you friend and wait until he joins"
                        : "Finding a worthy opponent"
                    ),
                    e &&
                      r.a.createElement(N.a, {
                        mode: "text",
                        onClick: this.handleShareWithFriend,
                        text: "Send link to your friend"
                      })
                  );
                }
              }
            ]),
            n
          );
        })(a.Component),
        Xt = Object(s.b)(function(e) {
          return e;
        })(Vt);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      var Ht = Object(d.b)(function() {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ke,
          n = arguments.length > 1 ? arguments[1] : void 0;
        switch (n.type) {
          case Re:
            return { gameRoomDatabaseRef: n.payload };
          default:
            return e;
        }
      });
      window.FBInstant.initializeAsync()
        .then(function() {
          console.log("XXXXX"),
            i.a.render(
              r.a.createElement(
                s.a,
                { store: Ht },
                r.a.createElement(
                  c.a,
                  null,
                  r.a.createElement(
                    l.a,
                    null,
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/",
                      component: R
                    }),
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/menu",
                      component: Ce
                    }),
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/game",
                      component: Tt
                    }),
                    r.a.createElement(u.a, {
                      exact: !0,
                      path: "/WaitingForOponent",
                      component: Xt
                    })
                  )
                )
              ),
              document.getElementById("root")
            );
        })
        .catch(function(e) {
          console.log(e.message);
        }),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    92: function(e, n, t) {
      e.exports = t.p + "stat/media/splash.bc063e02.png";
    }
  },
  [[237, 2, 1]]
]);
//# sourceMappingURL=main.370c8a5e.chunk.js.map
