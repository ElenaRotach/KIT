function click_addToCart(obj){

	if(isAutorised()){
		var order = getOrder(obj);
		if(order!=undefined){
			sendOrder(convertOrder(order));
		}
	}else{

		alert("Для оформления заказа необходимо авторизаваться на сайте!");
	}
}


function isAutorised(){

	return true;
}

function getOrder(btn){
	
	var order = new Order();
	var blockSum = btn.parent.parent;
	var blockProduct = blockSum.parent;

	order.product = blockProduct.id;

	var blockMainProperty = $(blockProduct + ':first-child'):ntn(2);
	var blockPackB = $(blockProduct + ':ntn(3)');
	var blockPackS = $(blockProduct + ':ntn(4)');

	order.packB = getPack(blockPackB);
	order.packS = getPack(blockPackS);

	var blockThickness = $(blockMainProperty + ':ntn(6)');
	order.thickness = getThickness(blockThickness);

	var blockmResist = $(blockMainProperty + ':ntn(5)');
	order.mResist = getThickness(blockmResist);

	for(var i=2; i<5; i++){
		var blocklettering = $(blockMainProperty + ':ntn(' + i + ')');
		var result = getThickness(blocklettering);
		if(result!=""){
			order.lettering = ;
		}
	}
	return order;
}

function getPack(obj){

	var blockCount = $(obj + '<input>' )
	return +blockCount.val();
}

function getThickness(obj){

	var checkedRadioName = "";

	var radioList = $(obj + ":ntn(2)").children;
	for(var i=0; i < radioList.lenth; i++){
		if(isChecked(radioList[i])){
			checkedRadioName = $(radioList[i] + ' input').text;
		}
	}
}

function isChecked(obj){

	if($(radioList[i] + ' i').css("opacity")==1){
		return true;
	}else{
		return false;
	}
}

function convertOrder(order){

	return JSON.parse(order);
}

function sendOrder(strOrd){
	$.ajax({
		url: '/tasks/default/setfile',
		type: 'POST',
		data: {
			'order': strOrd,
		},
		success: function(data){
		
		},
		error: function(){
			console.log('Внутренняя ошибка сервера');
		}
	});
}

function Order(){
	/* 	product - изделие
		user - пользователь
		lettering - тиснение
		mResist - влагостойкость
		thickness - толщина
		packB - количество больших пачек
		packS - количество маленьких пачек
	*/
}

/*==========================================================================================*/
function writeSS(order, id){
	/*SessionStorage - очистится при закрытии вкладки или браузера
	LocalStorage - очищается методом Clear();*/
	try{
		SessionStorage.setItem(id, convertOrder(order));
	}
	catch (e){
		if(e == QUOTA_EXCEEDED_ERR){
			console.log("Превышен лимит в 5Mb");
		}
	}
}