<template>
  <svg
    v-if="name === 'bell'"
    :width="width || 32"
    :height="height || 32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M24 10.6666C24 8.54489 23.1571 6.51006 21.6569 5.00977C20.1566 3.50948 18.1217 2.66663 16 2.66663C13.8783 2.66663 11.8434 3.50948 10.3431 5.00977C8.84286 6.51006 8 8.54489 8 10.6666C8 20 4 22.6666 4 22.6666H28C28 22.6666 24 20 24 10.6666Z"
      :stroke="fill || '#A9B0C2'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M18.3065 28C18.0721 28.4041 17.7356 28.7395 17.3308 28.9727C16.926 29.2059 16.467 29.3286 15.9998 29.3286C15.5327 29.3286 15.0737 29.2059 14.6689 28.9727C14.2641 28.7395 13.9276 28.4041 13.6932 28"
      :stroke="fill || '#A9B0C2'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="name === 'stop'"
    :width="width || 32"
    :height="height || 32"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 29.3333C23.3638 29.3333 29.3333 23.3638 29.3333 16C29.3333 8.63616 23.3638 2.66663 16 2.66663C8.63619 2.66663 2.66666 8.63616 2.66666 16C2.66666 23.3638 8.63619 29.3333 16 29.3333Z"
      :stroke="fill || '#FF2E53'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M20 12H12V20H20V12Z"
      :stroke="fill || '#FF2E53'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="name === 'alert'"
    :width="width || 2"
    :height="height || 10"
    viewBox="0 0 2 10"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.994995 1V5"
      :stroke="fill || 'white'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M0.994995 9H1.005"
      :stroke="fill || 'white'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="name === 'dots'"
    :width="width || 24"
    :height="height || 33"
    viewBox="0 0 24 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="11.5" cy="9" r="1.5" :fill="fill || '#42A5F5'" />
    <circle cx="11.5" cy="16" r="1.5" :fill="fill || '#42A5F5'" />
    <circle cx="11.5" cy="23" r="1.5" :fill="fill || '#42A5F5'" />
  </svg>
  <svg
    v-else-if="name === 'close'"
    :width="width || 16"
    :height="height || 16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L4 12"
      :stroke="fill || '#A9B0C2'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4 4L12 12"
      :stroke="fill || '#A9B0C2'"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
  <svg
    v-else-if="name === 'chevron'"
    :width="width || 12"
    :height="height || 7"
    viewBox="0 0 12 7"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      opacity="0.2"
      d="M1 0.5L6 5.5L11 0.5"
      :stroke="fill || '#42A5F5'"
      stroke-linecap="round"
    />
  </svg>
  <svg
    v-else-if="name === 'chevron-small'"
    :width="width || 8"
    :height="height || 5"
    viewBox="0 0 8 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.33331 1L4.33331 4L7.33331 1"
      :stroke="fill || '#F2F2F2'"
      stroke-linecap="round"
    />
  </svg>
  <svg
    v-else-if="name === 'search'"
    :width="width || 20"
    :height="height || 20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
      :stroke="fill || '#42A5F5'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M17.5 17.5L13.875 13.875"
      :stroke="fill || '#42A5F5'"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    name: String,
    width: [Number, String],
    height: [Number, String],
    fill: String,
  },
};
</script>
