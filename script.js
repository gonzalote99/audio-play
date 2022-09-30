import playlist from './playlist';

const demo = window.demo || {}

let jPlaylist;


jQuery.extend(demo, {
  setupPlayer: () => {
    jPlaylist = new jPlayerPlaylist(
      {
        jPlayer: '#jquery_jplayer_1',
        cssSelectorAncestor: '#jp_container_1',

      },
      playlist,

      {
        swfPath: 'https://raw.githubusercontent.com/lukemcdonald/jplayer-skin-premium-pixels/main/src/assets/media',
        supplied: 'oga, mp3',
        wmode: 'window',
        useStateClassSkin: true,
        autoBlur: false,
        keyEnabled: true,
      }
    )


  },
})

demo.setupPlayer();

