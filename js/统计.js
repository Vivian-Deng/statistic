$(document).ready(function() {
	$('#container').css('max-width',($(window).width()));
    $('#container').height($(window).height());
    $('#splitLine').width($(window).width()*0.01);
    $('.statisticList').width($('#container').width()*0.15);
    $('.statisticChart').width($('#container').width()-$('.statisticList').width()-$('#splitLine').width()-20);   
    $('.statisticChart').height($('#container').height()-$('.topBan').height());    
    $('.charts').height($('.statisticChart').height()-$('#showNumber').height());
    $('.charts').width($('.statisticChart').width());
    $('.topBan').height($('#leftSlide').height()+2);
    $('#splitLine').height($('#container').height()); 
    viewCharts_birth_averageTemp();
    showNumber();
    $(window).resize(function(){            
            $('#container').css('max-width',($(window).width()));
            $('#container').height($(window).height());
            $('#splitLine').width($(window).width()*0.01);
            $('.statisticList').width($('#container').width()*0.15);
            $('.statisticChart').width($('#container').width()-$('.statisticList').width()-$('#splitLine').width()-20);   
            $('.statisticChart').height($('#container').height()-$('.topBan').height());    
            $('.charts').height($('.statisticChart').height()-$('#showNumber').height());
            $('.charts').width($('.statisticChart').width());
            $('.topBan').height($('#leftSlide').height()+2);
            $('#splitLine').height($('#container').height());
            //myChart1.resize();
        });

    //$('#leftSlide').click(function(){$('.statisticList').animate({width:0},350);});
});

var labelOption = {    
        show: false,
        position: 'insideBottom',
        distance: 15,
        align: 'left',
        verticalAlign: 'middle',
        formatter: '{c}',
        fontFamily: 'Microsoft YaHei',
        fontSize: 12,    
};
var option = {
        title: {
            text: '生育期平均气温',
            left:'50%',
            textStyle:{
                fontFamily: 'Microsoft YaHei',
                fontWeight:15,
            }
        },
        tooltip: {
            trigger: 'axis',
            alwaysShowContent: false,
        },
        legend: {
            orient:'vertical',
            x:'right',
            data:['实况值','去年值','常年值','下限值','适宜值']
        },
        grid: {
            left: '3%',
            right: '10%',
            bottom: '3%',
            containLabel: true,
        },
        xAxis: {
            type: 'category',
            axisLabel:{
                rotate:45,
            },
            data: ['接种期','出苗期','三叶期','七叶期','拔节期','抽穗期']
        },
        yAxis: {
            type: 'value',
        },
        series: [
            {
                name:'实况值',
                type:'line',
                smooth: true,
                label: labelOption,
                data:[16, 15, 17, 20, 21, 21]
            },
            {
                name:'去年值',
                type:'line',
                smooth: true,
                label: labelOption,
                data:[6, 13, 18, 16, 21, 26]
            },
            {
                name:'常年值',
                type:'line',
                smooth: true,
                label: labelOption,
                data:[11, 13, 16, 18, 20, 22]
            },
            {
                name:'下限值',
                type:'line',
                smooth: true,
                label: labelOption,
                data:[8, 10, 10, 13, 15, 18]
            },
            {
                name:'适宜值',
                type:'line',
                smooth: true,
                label: labelOption,
                data:[10, 16, 18, 18, 20, 21]
            }
                ]
    };
function showNumber(){
    $("input[name='check_show']").click(function(){
        if($(this).prop("checked")){
            labelOption.show=true;
        }else{
            labelOption.show=false;
        }        
        viewCharts_birth_averageTemp();
    })
};
function viewCharts_birth_averageTemp(){
	var myChart1 = echarts.init(document.getElementById('myChart1')); 
    myChart1.setOption(option);
    window.onresize = myChart1.resize;
};