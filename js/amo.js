let _alloka;
window.addEventListener('load', () => {
        function set_cookie(name, value, options) {
                options = options || {};
         
                var expires = options.expires;
         
                if (typeof expires == "number" && expires) {
                    var d = new Date();
                    d.setTime(d.getTime() + expires * 1000);
                    expires = options.expires = d;
                }
                if (expires && expires.toUTCString) {
                    options.expires = expires.toUTCString();
                }
         
                value = encodeURIComponent(value);
         
                var updatedCookie = name + "=" + value;
         
                for (var propName in options) {
                    updatedCookie += "; " + propName;
                    var propValue = options[propName];
                    if (propValue !== true) {
                          updatedCookie += "=" + propValue;
                    }
                }
         
                document.cookie = updatedCookie;
            }

        set_cookie('UATCID','UA-49298821-18');

    /* roistat visit */
    (function(w, d, s, h, id) { w.roistatProjectId = id; w.roistatHost = h; var p = d.location.protocol == "https:" ? "https://" : "http://"; var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init"; var js = d.createElement(s); js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);})(window, document, 'script', 'cloud.roistat.com', 'fbdf361bf48da9c66674091589d057b8');

    /* r7k12 init */
    (function(w,d,k){w['r7k12']=w['r7k12']||[];var s=d.createElement('script');s.async=1;s.src='https://r7k12.com/scripts/'+k+'/counter.js';s.type='application/javascript';d.head.appendChild(s);})(window,document,'b05277575ae6922f82684ecdeec75d14');r7k12.push({hit:'pageview'});

    console.log('r7k12 Start load');
    $('form').append('<input type="hidden" name="location" value="Ярославль">');
            $('.form-send').each(function(){
                var form = this;
                $(form).find('.btn').click(function(e){
                  e.preventDefault();    
                  
                  var data = {type: "Form"};
                  
                  	if(form['name']) {
                      data.name = form['name'].value;
                    }
                    if(form['email']) {
                      data.email = form['email'].value;
                    }
                    if(form['phone']) {
                      data.phone = form['phone'].value;
                    }
                  
                  	if(!data.name) {
                      $(form).find('input[name="name"]').css({'border-color': 'red'})
                    } else {
                     $(form).find('input[name="name"]').css({'border-color': 'green'}) 
                    }
                  
                  	if(!data.phone) {
                      $(form).find('input[name="phone"]').css({'border-color': 'red'})
                    } else {
                      $(form).find('input[name="phone"]').css({'border-color': 'green'})
                    }
                  
                  if(!data.email) {
                      $(form).find('input[name="email"]').css({'border-color': 'red'})
                    } else {
                      $(form).find('input[name="email"]').css({'border-color': 'green'})
                    }
                    
                    if((data.name && data.phone) || (data.name && data.email)) {

                      setTimeout(function() {
                         window.location = 'https://v-yaroslavl.ru/thanks.html'
                      }, 1500);
                    }
                });
            });

        _alloka = {
            objects: {
                'f925f3314783d2b5': {
                    block_class: 'phone_alloka',
                    jivosite: false,
                    email_tracking: false,
                    format: '8 (#{XXX}) #{XXX}-#{XX}-#{XX}'
                }
            },
            trackable_source_types:  ["type_in", "referrer", "utm"],
            last_source: false,
              use_geo: false
        };
    
        loadScript("https://analytics.alloka.ru/v4/alloka.js", () => {
                    allokaInit();
        });


            loadScript("./js/sourcebuster.min.js", () => {});
            console.log('yadrocrm Start load');
            (function(d, w, k) {
                w.introvert_callback = function() {
                    try {
                        w.II = new IntrovertIntegration(k);
                    } catch (e) {console.log(e)}
                };
            
                var n = d.getElementsByTagName("script")[0],
                    e = d.createElement("script");
            
                e.type = "text/javascript";
                e.async = true;
                e.src = "https://api.yadrocrm.ru/js/cache/"+ k +".js";
                n.parentNode.insertBefore(e, n);
            })(document, window, 'b7e88ad8');

                /* google analitics */
            loadScript("https://www.googletagmanager.com/gtag/js?id=UA-49298821-18", () => {
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'UA-49298821-18');
            });

            /* yandex metrica */
            (function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter47584717 = new Ya.Metrika2({ id:47584717, clickmap:true, trackLinks:true, accurateTrackBounce:true, webvisor:true, trackHash:true }); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = "https://mc.yandex.ru/metrika/tag.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks2"); 

            /* facebookpixel */
            !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
            n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
            document,'script','https://connect.facebook.net/en_US/fbevents.js');
            
            fbq('init', '688064737954233');
            fbq('track', "PageView");

            // /* Hybrid */
            // window._txq = window._txq || [];
            // var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = '//st.targetix.net/txsp.js';
            // (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(s);
            // _txq.push(['createPixel', '5935c3307bc72ff9d419ac7b']);
            // _txq.push(['track', 'PageView']);

            /* vk pixel */
            (window.Image ? (new Image()) : document.createElement('img')).src = 'https://vk.com/rtrg?p=VK-RTRG-17690-aBYyF';

            /* top mail.ru */
            var _tmr = _tmr || [];
            _tmr.push({id: "2545075", type: "pageView", start: (new Date()).getTime()});
            (function (d, w) {
            var ts = d.createElement("script"); ts.type = "text/javascript"; ts.async = true;
            ts.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//top-fwz1.mail.ru/js/code.js";
            var f = function () {var s = d.getElementsByTagName("script")[0]; s.parentNode.insertBefore(ts, s);};
            if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); }
            })(document, window);

            loadStyles("https://cdn.callbackhunter.com/widget/tracker.css", () => {
                loadScript("https://cdn.callbackhunter.com/widget/tracker.js", () => {
                    var hunter_code="87d8f5c64956ed0dabc1e10c99007d49";
                });
            });
});

function loadScript(e, t) {
    var a = document.createElement("script");
    a.readyState
      ? (a.onreadystatechange = function() {
          ("loaded" != a.readyState && "complete" != a.readyState) ||
            ((a.onreadystatechange = null), t());
        })
      : (a.onload = function() {
          t();
        }),
      (a.src = e),
      document.getElementsByTagName("head")[0].appendChild(a);
  }

function loadStyles(e, t) {
    var a = document.createElement("link");
    a.readyState
      ? (a.onreadystatechange = function() {
          ("loaded" != a.readyState && "complete" != a.readyState) ||
            ((a.onreadystatechange = null), t());
        })
      : (a.onload = function() {
          t();
        }),
      (a.href = e),
      (a.setAttribute('rel','stylesheet')),
      document.getElementsByTagName("head")[0].appendChild(a);
  }