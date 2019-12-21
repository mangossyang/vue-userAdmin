<template>
<div class="alert alert-warning alert-dismissible text-left" role="alert">
  <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
  <strong>{{message}}</strong> 
</div>
</template>

<script>
export default {
    props: {
        message: String
    }
}
</script>

<style>

</style>