(function () {
  var cs = document.currentScript;
  if (document.documentMode || /Edge/.test(navigator.userAgent)) {
    var scripts = document.getElementsByTagName("script");
    cs = scripts[scripts.length - 1];
  }
  var params = {
    width: cs.getAttribute("data-width") || "100%",
    containerId: cs.getAttribute("data-container-id") || "widget-holder",
    iframeId: cs.getAttribute("data-iframe-id") || "search-widget",
  };
  var queryParams = {
    lang: cs.getAttribute("data-lang"),
    currency: cs.getAttribute("data-currency"),
    brand: cs.getAttribute("data-brand") || false,
    affilid: `mdtawfiqulhasankhanflightwidget` || false,
    passengers: cs.getAttribute("data-passengers"),
    source: cs.getAttribute("data-from") || false,
    destination: cs.getAttribute("data-to") || false,
    outboundDate: cs.getAttribute("data-departure") || false,
    inboundDate: cs.getAttribute("data-return") || false,
    outboundDays: cs.getAttribute("data-outbound-days") || false,
    inboundDays: cs.getAttribute("data-inbound-days") || false,
    affiliateNetwork: cs.getAttribute("data-affiliate-network") || false,
    pid: cs.getAttribute("data-pid") || false,
    sid: cs.getAttribute("data-sid") || false,
    sub1: cs.getAttribute("data-sub1") || false,
    sub2: cs.getAttribute("data-sub2") || false,
    sub3: cs.getAttribute("data-sub3") || false,
    sub4: cs.getAttribute("data-sub4") || false,
    sub5: cs.getAttribute("data-sub5") || false,
    primaryColorDepr: cs.getAttribute("data-primary-color") || false,
    searchFormBackgroundColorDepr:
      cs.getAttribute("data-background-primary-color") || false,
    resultsBackgroundColorDepr:
      cs.getAttribute("data-background-secondary-color") || false,
    searchFormSelectedTextColorDepr:
      cs.getAttribute("data-foreground-primary-color") || false,
    searchFormSecondaryTextColorDepr:
      cs.getAttribute("data-foreground-secondary-color") || false,
    limit: cs.getAttribute("data-limit") || false,
    resultsOnly: cs.getAttribute("data-results-only") || false,
    sortBy: cs.getAttribute("data-sort-by") || false,
    stopNumber: cs.getAttribute("data-stop-number") || false,
    transportTypes: cs.getAttribute("data-transport-types"),
    cabinClass: cs.getAttribute("data-cabin"),
    bags: cs.getAttribute("data-bags"),
    iframeId: cs.getAttribute("data-iframe-id") || "search-widget",
    airlinesList: cs.getAttribute("data-airlines-list") || false,
    selectedAirlinesExclude: cs.getAttribute("data-airlines-exclude") || false,
    sourceType: "widget-w-results",
    originRadius: cs.getAttribute("data-origin-radius") || false,
  };
  function generateQueryParams(params) {
    var params = Object.keys(params).map(function (key) {
      if (params[key]) {
        return key + "=" + params[key];
      }
    });
    params = params.filter(function (param) {
      return param != undefined;
    });
    return (
      params.join("&") +
      "&parentHref=" +
      encodeURIComponent(window.location.href)
    );
  }
  function getIframe(params) {
    var iframe = document.getElementById(params.iframeId);
    return iframe;
  }
  function appendIframe(params) {
    var host = "https://widgets.kiwi.com/basic";
    var src = host + "?" + generateQueryParams(queryParams);
    var iframe = document.createElement("iframe");
    iframe.src = src;
    iframe.width = params.width;
    iframe.height = "100px";
    iframe.scrolling = "no";
    iframe.style = "overflow:hidden; border:none;";
    iframe.frameBorder = "0";
    iframe.id = params.iframeId;
    document.getElementById(params.containerId).appendChild(iframe);
    window.addEventListener("message", function (ev) {
      var correctTarget = ev.data.iframeId === params.iframeId;
      if (typeof ev.data.height === "number") {
        if (ev.data.height > 100 && correctTarget) {
          iframe.height = ev.data.height + "px";
        }
      }
      if (typeof ev.data.scrollToTop === "boolean" && correctTarget) {
        iframe.scrollIntoView();
      }
    });
  }
  var iframe = getIframe(params);
  if (iframe) {
    if (document.documentMode) {
      iframe.parentNode.removeChild(iframe);
    } else {
      iframe.remove();
    }
  }
  appendIframe(params);
})();
