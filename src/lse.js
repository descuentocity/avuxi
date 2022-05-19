export default {
  name: 'avuxiLse',
  props: ['confId', 'lat', 'lng'],
  template: `
    <div class='vxlse'>
      <span class='vxwil'
            :t='confId'
            :ll='lat + "," + lng'>
      </span>
    </div>`,
  
  mounted() {
    AVUXI.LSERefresh();
  },
}