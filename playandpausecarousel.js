/**
 * Created by maikel on 16-10-2017.
 */
<script>
$(document).ready(function(){
    $("#mycarousel").carousel({interval:250});
    $("#carousel-pause").click(function(){
        $("#mycarousel").carousel('pause');
    });

    $("#carousel-play").click(function(){
        $("#mycarousel").carousel('cycle');
    });
});
</script>