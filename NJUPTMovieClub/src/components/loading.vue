<template>
  <section>
    <div class="mock">
      <div class="main">
        <div class="loader loader--style1" title="0">
          <svg
            version="1.1"
            id="loader-1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            :width="width"
            :height="width"
            viewBox="0 0 40 40"
            enable-background="new 0 0 40 40"
            xml:space="preserve"
          >
            <path
              opacity="0.5"
              fill="#000"
              d="M20.201,5.169c-8.254,0-14.946,6.692-14.946,14.946c0,8.255,6.692,14.946,14.946,14.946
    s14.946-6.691,14.946-14.946C35.146,11.861,28.455,5.169,20.201,5.169z M20.201,31.749c-6.425,0-11.634-5.208-11.634-11.634
    c0-6.425,5.209-11.634,11.634-11.634c6.425,0,11.633,5.209,11.633,11.634C31.834,26.541,26.626,31.749,20.201,31.749z"
            />
            <path
              fill="#000"
              d="M26.013,10.047l1.654-2.866c-2.198-1.272-4.743-2.012-7.466-2.012h0v3.312h0
    C22.32,8.481,24.301,9.057,26.013,10.047z"
            >
              <animateTransform
                attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 20 20"
                to="360 20 20"
                dur="1s"
                repeatCount="indefinite"
              />
            </path>
          </svg>
        </div>
        {{ title }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "40px"
    },
    height: {
      type: String,
      default: "40px"
    },
    title: {
      type: String,
      default: "Loading..."
    }
  }
};
</script>

<style scoped>
.mock {
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.95);
  overflow-y: hidden;
  overflow-y: auto;
}
.main {
  z-index: 201;
  text-align: center;
  font-size: 30px;
  color: #93b5cf;
}
.loader {
  margin: 0 auto;
  text-align: center;
  vertical-align: top;
}
svg path {
  fill: #2376b7;
}
</style>
