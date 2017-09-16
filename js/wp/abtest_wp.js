// IGNORE THIS FILE. IT ONLY EXISTS TO BE COMPATIBLE WITH WORDPRESS.

// TOASTR OPTIONS
toastr.options = {
  newestOnTop: true,
  progressBar: true,
  extendedTimeOut: '2500'
};

// LISTENER
jQuery(document).ready(function ($) {
  $('input').change(function () {
    $('#getEmbed').attr('disabled', $('input[required]').toArray().some(function (el) {
      return el.value.length === 0;
    }));
  });

  // BUTTON LISTENER
  $('#getEmbed').click(getEmbedUrl);
});

// GENERATE EMBED URL
function getEmbedUrl() {
  var urlA = $('#wistiaURLA');
  var urlB = $('#wistiaURLB');  

  // WISTIA HASHEDIDS FROM INPUT FIELDS
  var mediaHashedIdA = urlA.val().match(/medias\/(\w{10})/)[1];
  var mediaHashedIdB = urlB.val().match(/medias\/(\w{10})/)[1];

  function createEmbedUrl(hashedIdA,hashedIdB) {

    // DISPLAY EMBED URL
    document.getElementById("url").innerHTML =`
&lt;script src="https://fast.wistia.com/assets/external/E-v1.js" async&gt;&lt;/script&gt;
&lt;div class="wistia_responsive_padding" style="padding:56.25% 0 0 0;position:relative;"&gt;
  &lt;div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"&gt;
    &lt;div id="ab_test" class="wistia_embed videoFoam=true" style="height:100%;width:100%"&gt;&nbsp;&lt;/div&gt;
  &lt;/div&gt;
&lt;/div&gt;
&lt;script&gt;
  var hashedIds = [` + hashedIdA + `, ` + hashedIdB + `];
  var rand = Math.floor(Math.random() * hashedIds.length);
  var autoPlay = false;
  var hashedId = hashedIds[rand];
  document.getElementById("ab_test").className += " wistia_async_" + hashedId;
&lt;/script&gt;`;
    
    // DISPLAY VIDEO EMBEDS
    document.getElementById("vidA").innerHTML ="Video A";
    document.getElementById("videoEmbedA").className += " wistia_async_" + hashedIdA;
    window._wq = window._wq || [];
      _wq.push({
        id: hashedIdA,
      });

    document.getElementById("vidB").innerHTML ="Video B";
    document.getElementById("videoEmbedB").className += " wistia_async_" + hashedIdB;
    window._wq = window._wq || [];
      _wq.push({
        id: hashedIdB,
      });
  };

  createEmbedUrl(mediaHashedIdA, mediaHashedIdB);
}

function reset() {
  $('.dynamic').val('');
  document.getElementById("getEmbed").disabled = true;
}
