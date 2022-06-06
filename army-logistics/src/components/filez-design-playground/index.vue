<template>
    <div>
    <fz-date-picker @change="onChange" />
    <br />
    <fz-month-picker @change="onChange" placeholder="Select month" />
    <br />
    <fz-range-picker @change="onChange" />
    <br />
    <fz-week-picker @change="onChange" placeholder="Select week" />
  </div>
</template>

<script>
export default {
    name: 'filez-entry',
    data() {
      return {}  
    },
}
</script>