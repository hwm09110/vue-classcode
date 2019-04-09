<template>
    <div class="progress-wrap">
        <div class="progress-box">
            <div class="step-list">
                <div class="step-box first" :class="activeNum > 0?'active':''">
                    <div class="title">开通手机号码</div>
                    <div class="step-num">1</div>
                </div>
                <div class="step-box second" :class="activeNum > 1?'active':''">
                    <div class="title">填写学生信息</div>
                    <div class="step-num">2</div>
                </div>
                <div class="step-box third" :class="activeNum > 2?'active':''">
                    <div class="title">完成</div>
                    <div class="step-num">3</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
	name: "ProgressBar",
	props: {
		activeNum: {
			type: Number,
			required:true,
			default: 1,
			validator: function(value){
				return value > 0
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.progress-wrap{	
	background-color: #fff;
    border-bottom: 3px solid #efeff4;
    .progress-box{
        padding: 30px 0;
        background-color: #fff;
        position: relative;
        margin: 0 38px;
		}
		.step-list{
			position: relative;
			z-index: 2;
			&::after{
				display: block;
				clear: both;
				content: '';
				height: 0;
				visibility: hidden;
			}
		}
		.step-box{
			float: left;
			position: relative;
			.title{
				margin-bottom: 15px;
				font-size: 22px;
				color: #3f3f3f;
			}
			.step-num{
				display: inline-block;
				width: 45px;
				height: 45px;
				line-height: 45px;
				text-align: center;
				color: #fff;
				border-radius: 100%;
				background-color: #ddd;
				font-size: 20px;
			}
			&::after{
				position: absolute;
				content: '';
				display: block;
				width: 100%;
				height: 10px;
				background-color: #ddd;
				left: 0;
				bottom: 20px;
				z-index: -1;
			}
			&.active{
				.step-num,
				&::after{
					background-color: #47aefe;
				}
				.title{
					color: #47aefe;
				}
			}
		}
		.first{
			width: 27%;
		}
		.second{
			width: 46%;
			text-align: center
		}
		.third{
			width: 27%;
			text-align: right;
		}
}
</style>
