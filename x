<template>
<div>
    <h1>
        Video Call<br><small style="font-size: 14pt;">Powered by Agora.io</small>
    </h1>
    <h4>Local video</h4>
    <div id="me"></div>
    <h4>Remote video</h4>
    <div id="remote-container">
    </div>
</div>
</template>
<script src="./../sdk/script'"></script>
<script>
import AgoraRTC from 'agora-rtc-sdk'
import script from './../sdk/script'
export default {

}
</script>

<style>
*{
    font-family: sans-serif;
}
h1,h4{
    text-align: center;
}
#me{
    position: relative;
    width: 50%;
    margin: 0 auto;
    display: block;
}
#me video{
    position: relative !important;
}
#remote-container{
    display: flex;
}
#remote-container video{
    height: auto;
    position: relative !important;
}
</style>