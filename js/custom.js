window.Signalayer || function (t, e) {
    var o = {
        url: "https://cdn.tooltip.io/static/player.js",
        key: "BgGp1VcuH7wEX15ZVnG4Uo3quCIF_0W3fiYbok8IIZI",
        async: true
    };
    window.Signalayer = {cs: [], _apiKey: o.key};
    for (
        var r = ["identify", "goal", "updateUserData", "start", "stop", "refresh", "show", "hide", "on"],
            i = {}, n = 0; n < r.length; n++) {
        var a = r[n];
        i[a] = function (t) {
            return function () {
                var e = Array.prototype.slice.call(arguments);
                window.Signalayer.cs.push({method: t, args: e})
            }
        }(a)
    }
    window.Signalayer.API = i;
    var n = t.createElement(e), s = t.getElementsByTagName(e)[0];
    n.type = "text/javascript", n.async = o.async, s.parentNode.insertBefore(n, s), n.src = o.url
}(document, "script");


// Smooch

!function (e, n, t, r) {
    function o() {
        try {
            var e;
            if ((e = "string" == typeof this.response ? JSON.parse(this.response) : this.response).url) {
                var t = n.getElementsByTagName("script")[0], r = n.createElement("script");
                r.async = !0, r.src = e.url, t.parentNode.insertBefore(r, t)
            }
        } catch (e) {
        }
    }

    var s, p, a, i = [], c = [];
    e[t] = {
        init: function () {
            s = arguments;
            var e = {
                then: function (n) {
                    return c.push({type: "t", next: n}), e
                }, catch: function (n) {
                    return c.push({type: "c", next: n}), e
                }
            };
            return e
        }, on: function () {
            i.push(arguments)
        }, render: function () {
            p = arguments
        }, destroy: function () {
            a = arguments
        }
    }, e.__onWebMessengerHostReady__ = function (n) {
        if (delete e.__onWebMessengerHostReady__, e[t] = n, s) for (var r = n.init.apply(n, s), o = 0; o < c.length; o++) {
            var u = c[o];
            r = "t" === u.type ? r.then(u.next) : r.catch(u.next)
        }
        p && n.render.apply(n, p), a && n.destroy.apply(n, a);
        for (o = 0; o < i.length; o++) n.on.apply(n, i[o])
    };
    var u = new XMLHttpRequest;
    u.addEventListener("load", o), u.open("GET", "https://" + r + ".webloader.smooch.io/", !0), u.responseType = "json", u.send()
}(window, document, "Smooch", "5cb85731681a420010f04554");

// read decoded cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/**
Smooch.init({
    appId: '5cb85731681a420010f04554',
    customText: {
        headerText: 'Let\'s chat',
    }
}).then(function () {
    Smooch.updateUser({
      userId: getCookie('tp_user_id')
    });
    Signalayer.API.on("open_smooch", function () {
        Smooch.open();
    });
});
**/
