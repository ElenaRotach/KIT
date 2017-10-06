var NewOrganization = React.createClass({
	render:function () {
		return(
<div>
			<form className="col-xs-6">

				<label>Тип</label>
				<select  id="type" onchange="test(event)">
					<option>Юридическое лицо</option>
					<option>Индивидуальный предприниматель</option>
				</select>
				<label>Наименование <span>*</span></label>
				<Input type = "text" id="name"/>

				<label>ИНН <span>*</span></label>
				<Input type = "text" id="inn"/>			

				<label>КПП <span>*</span></label>
				<Input type = "text" id="kpp"/>

				<label>Телефон</label>
				<Input type = "text" id="tel"/>

				<label>e-mail</label><i id="mailValid" className="fa"></i>
				<Input type = "email" id="mail" className="validate"/>

				<button onclick="alert('123')">Сохранить</button>


		</form></div>
		);
	}
});

ReactDOM.render(
    <NewOrganization/>,
    document.getElementById('test')

);