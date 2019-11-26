function $get(keyword){
	let list = document.querySelectorAll(keyword);
	let cnt = list.length;
	if(cnt == 0)return false;
	else if(cnt == 1)return document.querySelector(keyword);
	else return list;
}

window.onload = function(){
	$get("#startBtn").addEventListener("click", () => {
		let problem = $get("#problem");
		let answer = $get("#answer");

		if(problem.value < 1 || answer.value < 1){
			alert("문항 수나 질의 수는 1 이상이어야 합니다.");
			return false;
		}
		let list = new Array();
		for(let i = 0; i < problem.value; i++){
			list[i] = [];

			for(let j = 0; j < answer.value; j++)list[i][j] = 0;
		}

		console.log(list);
		while(1){
			let data = prompt();
			if(data == "end")break;
			data = JSON.stringify(Number(data));
			console.log(data);
			if(data.length != problem.value){
				alert("문항수에 맞지 않습니다.");
				continue;
			}

			let temp = data.split("");

			for(let i = 0; i < problem.value; i++){
				list[i][temp[i]-1]++;
			}
		}

		let i = 1;
		list.forEach(x => {
			let form = `<div class="resultForm">
					<div class="pro">
						${i}문항
					</div>

					<div class="asw">
					</div>
				</div>`;
			let div = document.createElement("div");
			div.innerHTML = form;

			for(let i = 0; i < answer.value; i++){
				let temp = document.createElement("div");
				temp.innerText = x[i];
				div.querySelector(".asw").append(temp);
			}

			$get("#resultDiv").append(div.firstChild);
			i++;
		});
	});
}