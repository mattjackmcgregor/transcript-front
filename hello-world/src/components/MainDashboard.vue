<template>
    <div class="mainDashboard">
        <div class="mainDashboard-speaker">
            <input class="speaker" placeholder="speaker 1">
        </div>
        <div class="mainDashboard-caption">
            <img class="caption-flag" src="../assets/flag (2).png">
            <h4 class="caption-timecode">00:00:00-00:00:12</h4>
            <input class="caption-text" placeholder="input text here...">
            <input class="caption-reviewed" type="checkbox"><br>
            <button class="caption-merge-previous">merge prev</button>
            <button class="caption-merge-next">merge Next </button>


        </div>
    </div>
</template>

<script>
export default {
    name: 'MainDashboard',
    props: {
        
    }
}
</script>

<style lang="css" scoped>

.mainDashboard {
    width: 100vw;
}
.mainDashboard-speaker {
    position: relative;
    width: 25%;
}
.mainDashboard-caption {
    width: 75%;
    float: right; 
}
.caption-flag {
    height: 20px;
    width: 20px;
    position: absolute;
    left: 16%;
}
.caption-timecode {
    position: relative;
    right: -36%;
    margin-bottom: 0%;
}
.caption-text {
    width: 90%;
    height: 100px;
    background-color: rgba(224, 224, 224, 38%)
}
.caption-reviewed {
    height: 20px;
    width: 20px;
}
.caption-merge-previous {
    position: relative;
    left: 36%;
}
.caption-merge-next {
    position: relative;
    left: 37%;
}


</style>

