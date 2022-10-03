<template>
  <div class="gitalk-container">
    <div id="gitalk-container"></div>
  </div>
</template>

<script>
export default {
  name: 'Comment',
  data() {
    return {}
  },
  mounted() {
    const body = document.querySelector('.gitalk-container')
    const script = document.createElement('script')
    script.src =
      'https://cdn.jsdelivr.net/gh/Zenfection/package@main/zentalk.js'
    body.appendChild(script)
    script.onload = () => {
      const commentConfig = {
        clientID: '76f44752d7913bc73404',
        clientSecret: 'e73f50012ca61b7632c54e40c679e933f68da3b5',
        repo: 'zenctu',
        owner: 'zenfection',
        admin: ['zenfection1412'],
        id: location.pathname,
        distractionFreeMode: true,
      }
      const gitalk = new Gitalk(commentConfig)
      gitalk.render('gitalk-container')
    }
  },
}
</script>

<style>
@import '../css/gitalk.css';
</style>
