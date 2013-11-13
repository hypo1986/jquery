/*
// checkbox and select 2013.11.1
*/
$(function(){
	//left tag
	var setLeftList=$('.set-left-list'),
		setLeftItem=setLeftList.find('li'),
		setMainWrap=$('.set-main-wrap');
	setLeftItem.click(function(){
		var meEl=$(this);
		setLeftItem.removeClass('sla-on');
		meEl.addClass('sla-on');
		var index=meEl.index();
		if(index==0){
			setMainWrap.scrollTop(0);
		}else if(index==1){
			setMainWrap.scrollTop(70);
		}else if(index==2){
			setMainWrap.scrollTop(195);
		}else if(index==3){
			setMainWrap.scrollTop(290);
		}else if(index==4){
			setMainWrap.scrollTop(580);
		}
		
	});
	//滚动事件
	setMainWrap.scroll(function(){
		var scrollTop=setMainWrap.scrollTop();
		if(scrollTop >= 0 && scrollTop < 70){
			setLeftItem.removeClass('sla-on');
			setLeftItem.eq(0).addClass('sla-on');
		}else if(scrollTop > 70 && scrollTop < 180){
			setLeftItem.removeClass('sla-on');
			setLeftItem.eq(1).addClass('sla-on');
		}else if(scrollTop > 180 && scrollTop < 280){
			setLeftItem.removeClass('sla-on');
			setLeftItem.eq(2).addClass('sla-on');
		}else if(scrollTop > 280 && scrollTop < 580){
			setLeftItem.removeClass('sla-on');
			setLeftItem.eq(3).addClass('sla-on');
		}else if(scrollTop > 580){
			setLeftItem.removeClass('sla-on');
			setLeftItem.eq(4).addClass('sla-on');
		}
	});
	//checkbox
	var checkboxWrap=$('.checkbox-wrap');
	checkboxWrap.click(function(){
		var meEl=$(this);
		var checkboxEl=meEl.find('input[type=checkbox]');
		if(checkboxEl.is(':checked')){
			meEl.addClass('cbkw-on');
		}else{
			meEl.removeClass('cbkw-on');
		}
	});
	//radio
	var radioWrap=$('.radio-wrap');
	radioWrap.click(function(){
		var meEl=$(this);
		var radioFilterWrap=meEl.parents('.radio-filter-wrap');
		var radioEl=radioFilterWrap.find('input[type=radio]');
		if(radioEl.is(':checked')){
			radioFilterWrap.find(radioWrap).removeClass('radw-on')
			meEl.addClass('radw-on');
		}else{
			meEl.removeClass('radw-on');
		}
	});
	/*//radio
	var radioFilterWrap=$('.radio-filter-wrap'),
		radioWrap=radioFilterWrap.find('.radio-wrap');
	radioWrap.click(function(){
		var meEl=$(this);
		var radioEl=radioWrap.find('input[type=radio]');
		if(radioEl.is(':checked')){
			radioWrap.removeClass('radw-on')
			meEl.addClass('radw-on');
		}else{
			meEl.removeClass('radw-on');
		}
	});
	*/
	//select
	var smSelWrap=$('.sm-sel-wrap'),
		smSelText=$('.sm-sel-text',smSelWrap),
		smSelBtn=$('.sm-sel-btn',smSelWrap),
		smSelList=$('.sm-sel-list',smSelWrap);
		smSelBtn.add(smSelText).click(function(evt){
			if(smSelList.is(':visible')){
				smSelList.hide();
			}else{
				smSelList.show();
			}
			evt.stopPropagation();
		});
		smSelList.find('a').click(function(){
			var thisVal=$(this).html();
			smSelText.val(thisVal);
			smSelList.hide();
		});
		$(document).click(function(){
			smSelList.hide();
		});
});
