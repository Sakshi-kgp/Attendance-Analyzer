 let extradays=0;
    document.getElementById('attendanceForm').addEventListener('submit', function(event) {
      event.preventDefault();
      const pa = parseInt(document.getElementById('pa').value);
      const ta = parseInt(document.getElementById('ta').value);
     const atd=document.querySelector('#atd');
      if (isNaN(pa) || isNaN(ta) || pa < 0 || ta <= 0 || pa > ta) {
        alert('Please enter valid numbers. Attended days cannot exceed total days.');
        return;
      }

      const currentPercentage = (pa / ta) * 100;
      let ed = 0;
      while (((pa + ed) / (ta + ed)) * 100 < 75) {
        ed++;
      }
extradays=ed;
      atd.textContent=`Current attendance is ${currentPercentage.toFixed(2)}%.\nTo achieve 75% attendance, you need to attend ${ed} more class(es).`;



    });


    //to calculate extra days from present date.
 function calculateWorkingDays() {
      const input = document.getElementById('targetDate').value;
      const result = document.getElementById('result');

      if (!input) {
        result.textContent = 'Please select a date.';
        return;
      }

      const today = new Date();
      const target = new Date(input);

      // Reset time components to midnight for accurate day difference
      today.setHours(0, 0, 0, 0);
      target.setHours(0, 0, 0, 0);

      if (target < today) {
        result.textContent = 'The selected date is in the past.';
        return;
      }

      let count = 0;
      let currentDate = new Date(today);

      while (currentDate <= target) {
        const dayOfWeek = currentDate.getDay();
        // Skip Saturday (6) and Sunday (0)
        if (dayOfWeek !== 0 && dayOfWeek !== 6) {
          count++;
        }
        currentDate.setDate(currentDate.getDate() + 1);
      }

      result.textContent = `There are ${count} working day(s) from today to ${target.toDateString()}.`;
//to check it is possible to acheive 75% or not
const final=document.querySelector('.final');
      if(count>=extradays){
 final.textContent= ` It is possible to achieve 75%`;
}
else {
  final.textContent='sorry,it is not possible to achieve 75%';
}
final.classList.add('ok');
    }



//to make popup
const possible=document.querySelector('.possible');
  const extra=document.querySelector('.extra');
possible.addEventListener('click',()=>{

  extra.classList.add('open');
})
 const cross=document.querySelector('.cross');
 cross.addEventListener('click',()=>{
   extra.classList.remove('open');
 })

const btn1=document.querySelector('#btn1');

 btn1.addEventListener('click',()=>{
possible.classList.add('click');
 })