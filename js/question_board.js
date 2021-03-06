const prompt = document.querySelector('.question h2')
const btn_hint = document.querySelector('.hint .btn_hint')
const txt_hint = document.querySelector('.hint small')
const answers = document.querySelectorAll('.answers div .ans')
const ans_boxes = document.querySelectorAll('.answers div')
const btn_prev = document.querySelector('button.prev')
const btn_next = document.querySelector('button.next')

// Index of the current question
let currQues = 0;

// An array to store all the questions and their answers
let questionList = [];

// An array to store the result of the user's choice ( indicate if his/her choice is corrcect or not )
export let ans_check = [];

// Create Question class
class Question {
    constructor(prompt, ansList, correctAns, hint) {
        this.prompt = prompt;
        this.ansList = ansList;
        this.correctAns = correctAns;
        this.hint = hint;
        this.showHint = false;
    } 

    display() {
        prompt.innerText = this.prompt;
        for ( let i = 0; i < 4; i ++ ) {
            answers[i].innerText = this.ansList[i];
        }
        txt_hint.innerText = this.hint;
        if ( this.showHint == true ) {
            txt_hint.style.display = 'inline';
        } else {
            txt_hint.style.display = 'none';
        }
    }

}

// Function to hightlight the answer that is clicked
export function hightlightClickedAndCheckAnswer() {

    ans_boxes.forEach( ans_box => {
        ans_box.addEventListener('click', e => {
            ans_boxes.forEach( box => {
                box.classList.remove('chosen')
            })
            e.currentTarget.classList.add('chosen')
            if ( e.currentTarget.classList.contains(questionList[currQues].correctAns) ) ans_check[currQues] = true;
            else ans_check[currQues] = false;
        })
    })

}

// Function to show hint when user click the hint button
export function showHint() {
    btn_hint.addEventListener( 'click', () => {
        questionList[currQues].showHint = true;
        displayQuestion();
    })
}

// Function to initialize a list of question
export function createQuestionList( title ) {
    questionList = []
    ans_check = []
    if ( title == 'Easy' ) {
        questionList.push(new Question("Con v???t n??o to nh???t th??? gi???i", ["C?? voi xanh", "C?? m???p", "voi", "H???"], 'A', "Con v???t n??y s???ng d?????i n?????c") );
        questionList.push(new Question("Nh??n t??? n??o l??m cho l?? c??y c?? m??u xanh?", ["M?? gi???u", "Di???p l???c", "Kh??ng b??o", "Kh?? kh???ng"], 'B', "N?? n???m trong l???c l???p") );
        questionList.push(new Question("Con v???t n??o ch???y nhanh nh???t th??? gi???i", ["???? ??i???u", "L????n", "B??o", "M??o"], 'C', "Con v???t n??y c?? 4 ch??n") );
        questionList.push(new Question("Con n??o bi???t b??i", ["???? ??i???u", "H???", "M??o", "Th???ch s??ng"], 'B', "Con v???t n??y c?? s???c") );
        questionList.push(new Question("Ai l?? ng?????i gi??u nh???t vi???t nam", ["Ph???m Quang Minh", "Ph???m Nh???t V?????ng", "Bill Gates", "Thanh Th???o"], 'B', "Ng?????i n??y c?? 2 ch??n") );
        questionList.push(new Question("T??a nh?? n??o cao nh???t vi???t nam", ["M?????ng Thanh", "Landmark 72", "BURJ KHALIFA", "Landmark 81"], 'D', "T??a nh?? n??y ??? th??nh ph??? h??? ch?? minh") );
        questionList.push(new Question("????u l?? t??n c???a 1 lo???i laptop", ["Iphone X", "Samsung galaxy s10", "Dell XPS 15", "Toshiba"], 'C', "Lo???i ????p ??n D") );
        questionList.push(new Question("C?? bao nhi??u cung ho??ng ?????o", ["50", "100", "12", "10"], 'C', "S??? n??y b?? h??n 20") );
        questionList.push(new Question("C?? bao nhi??u ng??y trong n??m nhu???n", ["300", "367", "365", "366"], 'D', "S??? n??y l???n h??n 365") );
        questionList.push(new Question("N?????c s??i ??? bao nhi??u ????? C ??? ??p su???t 1 atm", ["100", "200", "80", "50"], 'A', "S??? n??y l???n h??n 90") );
    } 
    if ( title == 'Medium' ) {
        questionList.push(new Question("V??? vua cu???i c??ng c???a ch??? ????? phong ki???n n?????c ta l?? ai?", ["Kh???i ?????nh", "H??m Nghi", "??inh B??? L??nh", "B???o ?????i"], 'D', "Ng?????i n??y c?? v??? ng?????i Ph??p") );
        questionList.push(new Question("?????nh n??i n??o cao nh???t th??? gi???i", ["Everest", "Phan xi p??ng", "Kanchenjunga", "Dhaulagiri"], 'A', "?????nh n??y n???m tr??n d??y n??i Himalaya") );
        questionList.push(new Question("Lo??i b?? s??t l???n nh???t th??? gi???i l???", ["H????u cao c???", "R???ng Komodo", "C?? s???u n?????c m???n", "Th???ch s??ng"], 'C', "Con v???t n??y s???ng ??? ?????m l???y") );
        questionList.push(new Question("Ai l?? t???ng th???ng ?????u ti??n c???a n?????c M???", ["Obama", "Washington", "Lincoln", "Bush"], 'B', "Ng?????i n??y h???i b?? t???ng ch???t c??y anh ????o v?? su??t b??? cha m???ng") );
        questionList.push(new Question("Ai l?? ng?????i ph??t minh ra m??y h??t ????a?", ["Elon Musk", "Fabre", "Edison", "Larry Page"], 'C', "Ng?????i n??y c??ng ph??t minh ra b??ng ????n") );
        questionList.push(new Question("H??nh tinh n??o trong h??? m???t tr???i g???n m???t tr???i nh???t?", ["Sao kim", "Sao H???a", "Tr??i ?????t", "Sao Th???y"], 'D', "H??nh tinh n??y c??ng l?? h??nh tinh nh??? nh???t h??? m???t tr???i") );
        questionList.push(new Question("????u l?? t??n c???a v??? n??? h??nh th??nh n??n v?? tr????", ["Big Bang", "Moscow", "FOAB", "Gamma"], 'A', "V??? n??? n??y c?? trong t??n c???a m???t series phim n???i ti???ng") );
        questionList.push(new Question("B??? ph???n n??o sau ????y ???????c coi l?? b??? n??o m??y t??nh", ["Qu???t", "CPU", "??? c???ng", "Thanh Ram"], 'B', "T??n ti???ng anh c???a n?? l?? Central Processing Unit") );
        questionList.push(new Question("Trong Conan, t??? ch???c n??o l??m cho shinichi b??? thu nh???", ["??o tr???ng", "CIA", "FBI", "??o ??en"], 'D', "T??n c???a t??? ch???c c?? ch???a m??u s???c") );
        questionList.push(new Question("Con ng?????i ti???n h??a t??? lo??i n??o?", ["Kh??? ?????t", "Kh???ng long", "???? ??i???u", "V?????n c???"], 'D', "Con v???t n???y c?? h??nh d??ng gi???ng ng?????i") );
    }
    if ( title == 'Hard' ) {
        questionList.push(new Question("Ai l?? ng?????i ngh?? ra thuy???t t????ng ?????i?", ["Einstein", "Nicolas Tesla", "Kenedy", "Newton"], 'A', "Ng?????i n??y ngh?? ra c??ng th???c E = mc2") );
        questionList.push(new Question("M??u s???c n??o l?? hi???m nh??t trong t??? nhi??n?", ["T??m", "?????", "Xanh da tr???i", "Xanh l?? c??y"], 'C', "????y l?? m??u c???a m???t lo??i b?????m n???i ti???ng t??n Morpho") );
        questionList.push(new Question("Tia n??o sau ????y d??ng ????? ch???a b???nh c??i x????ng", ["Tia t??? ngo???i", "Tia gamma", "Tia X", "Tia s??ng xanh"], 'A', "Tia n??y c?? b?????c s??ng nh??? th??? nh?? trong c??c tia ???? cho") );
        questionList.push(new Question("T??n c???a b???nh n??o sau ????y l??m ng?????i ta l??o h??a r???t nhanh", ["leukemia", "covid-19", "progria", "Lao"], 'C', "B???nh n??y c???c hi???m g???p") );
        questionList.push(new Question("Lo???i ARN n??o c?? ch???c n??ng v???n chuy???n axit amin", ["tARN", "mARN", "rARN", "Polipeptit"], 'A', "T??n c???a n?? c?? ch??? ARN") );
        questionList.push(new Question("?????i n??o l?? ?????i l??u ?????i nh???t?", ["?????i c??? sinh", "?????i Th??i C???", "?????i Nguy??n Sinh", "?????i Trung Sinh"], 'B', "T??n c???a ?????i n??y th??? hi???n s??? l??u ?????i c???a n??") );
        questionList.push(new Question("Ai l?? ng?????i t???o ra ng??n ng??? Basics?", ["John G. Kemeny", "James Gosling", "Bjarne Stroustrup", "Hilary Clinton"], 'A', "??ng n??y ng???m r???i") );
        questionList.push(new Question("Li??n X?? ch??? t???o th??nh c??ng bom nguy??n t??? v??o th???i gian n??o?", ["1920", "1949", "1820", "2000"], 'B', "4 n??m sau khi M??? n??m bom xu???ng Nagasaki") );
        questionList.push(new Question("Con v???t n??o sau ????y c?? th??? g??y ra l???c t???n c??ng 15000 newtons", ["S?? t???", "G???u", "T??m t??t", "Chim ?????i b??ng"], 'C', "Con v???t n??y nh??? h??n r???t nhi???u sao v???i s???c s??t th????ng n?? g??y ra") );
        questionList.push(new Question("1 Mach = bao nhi??u m/s?", ["1000", "100", "343", "256"], 'C', "N?? ch??nh l?? t???c ????? ??m thanh") );
    }
}

// Function to display the question in the array onto the question board
export function displayQuestion() {
    questionList[currQues].display();
}

// Function to change to the next question when the right arrow button is clicked
export function nextQuiz() {
    btn_next.addEventListener('click', () => {
        if ( currQues == questionList.length - 1 ) return;
        currQues ++;
        displayQuestion();
        ans_boxes.forEach( box => {
            box.classList.remove('chosen')
        })
    })
}

// Function to change to the previous question when the left arrow button is clicked
export function prevQuiz() {
    btn_prev.addEventListener('click', () => {
        if ( currQues == 0 ) return;
        currQues --;
        displayQuestion();
        ans_boxes.forEach( box => {
            box.classList.remove('chosen')
        })
    })
}

