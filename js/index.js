let chkBtn = document.querySelector('#chkBtn');
let sumArry = [];
let sumArry2 = [];
let sumResult = 0;
let lastResult = 0;
let arry3 = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5]
//경고표시
let warning = document.querySelector('#warning');

chkBtn.addEventListener('click', function () {
    
    //주민번호 앞자리값을 받아옴
    let jumin1 = document.querySelector('#jumin1').value;
    //주민번호 뒷자리값을 받아옴
    let jumin2 = document.querySelector('#jumin2').value;
    // 주빈번호 앞,뒤자리를 sumArry에 배열로 넣음
    for (i = 0; i < jumin1.length; i++) {
        sumArry.push(jumin1[i]);
    }
    for (i = 0; i < jumin2.length; i++) {
        sumArry.push(jumin2[i]);
    }
    //주민번호 각 자리에 값을 곱하기위한 -1
    for (i = 0; i < sumArry.length-1; i++) {
        // 곱한값을 배열로 저장
        sumArry2[i] = sumArry[i] * arry3[i];
        // 배열로 저장한 값을 하나씩 더함
        sumResult += sumArry2[i];
        //유효성검사를 위한 주민번호 마지막 자리를 담음
        lastResult = sumArry[12];
        
    }
    //유효성검사를 위한 공식
    sumResult = sumResult % 11;
    // console.log(sumResult);
    sumResult = 11 - sumResult;
    if (sumResult > 9) {
        sumResult = sumResult % 10;
    }

    if(sumArry == ''){
        
        warning.innerHTML = '아무것도 입력하지 않았습니다.';
        warning.style.color = `#E87C03`;
        

//***변수 초기화***
// ***변수 초기화 끝***

// 마지막자리와 유효성검사를 한 값이 동일하면 유효한 주민번호 아니라면 warning에 메시지를 보냄
    }else if(sumResult == lastResult) {   
        warning.innerHTML = '유요한 주민번호입니다';
        warning.style.color = `#27b24a`;
        document.querySelector('#jumin1').style.borderBottom = `2px solid #27b24a`;
        document.querySelector('#jumin2').style.borderBottom = `2px solid #27b24a`;

    } else if(sumArry.length !== 13 && sumResult != lastResult){
        warning.innerHTML = '유효하지 않습니다';
        warning.style.color = `#E87C03`;

        //***변수 초기화***
    document.querySelector('#jumin1').value = ''; 
    document.querySelector('#jumin2').value = ''; 
    sumArry = [];
    sumArry2 = [];
    sumResult = 0;
    lastResult = 0;
    // ***변수 초기화 끝***
    }else if(isNaN(Number(sumArry[i]))){
        warning.innerHTML = '숫자를 입력해주세요';
        warning.style.color = `#E87C03`;
        //***변수 초기화***
    document.querySelector('#jumin1').value = ''; 
    document.querySelector('#jumin2').value = ''; 
    sumArry = [];
    sumArry2 = [];
    sumResult = 0;
    lastResult = 0;
    // ***변수 초기화 끝***
    document.querySelector('#jumin1').style.borderBottom = `none`;
    document.querySelector('#jumin2').style.borderBottom = `none`;
    }else{
        warning.innerHTML = '유효하지 않습니다';
        warning.style.color = `#E87C03`;
        document.querySelector('#jumin1').value = ''; 
    document.querySelector('#jumin2').value = ''; 
    sumArry = [];
    sumArry2 = [];
    sumResult = 0;
    lastResult = 0;

    }
});
chkBtn.addEventListener('mousedown',function(){
    chkBtn.style.backgroundColor = `#bb0a12`;
});
chkBtn.addEventListener('mouseup',function(){
    chkBtn.style.backgroundColor = `#e50914`;
});


    //인풋 효과
    //시각효과를 위해 값이 동일하지 않을경우 border에 색상을 추가함
    //클릭이 아닌 input에 타이핑시 숫자가 아니면 경고함
    document.querySelector('#jumin1').addEventListener('input', function(){
        let numChange = document.querySelector('#jumin1').value
            if(isNaN(numChange)){
                warning.innerHTML = '숫자를 입력해주세요';
        warning.style.color = `#E87C03`;
        jumin1.style.borderBottom = `2px solid #E87C03`;
            }else if(numChange == '' && !isNaN(numChange)){
                warning.innerHTML = '&nbsp';
                jumin1.style.borderBottom = `none`;
            }else{
                warning.innerHTML = '&nbsp';
                jumin1.style.borderBottom = `none`;
            }

    })
    document.querySelector('#jumin2').addEventListener('input', function(){
        let numChange = document.querySelector('#jumin2').value
            if(isNaN(numChange)){
                
        warning.innerHTML = '숫자를 입력해주세요';
        warning.style.color = `#E87C03`;
        jumin2.style.borderBottom = `2px solid #E87C03`;
            }else if(numChange == ''){
                warning.innerHTML = '&nbsp';
                jumin2.style.borderBottom = `none`;
            }else{
                warning.innerHTML = '&nbsp';
                jumin2.style.borderBottom = `none`;
            }
    });