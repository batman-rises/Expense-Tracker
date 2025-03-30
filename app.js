const a =document.querySelector('form');
const nameIP=document.querySelector('#name');
const amountIP=document.querySelector('#amount');
const dateIP=document.querySelector('#date');
const categoryIP=document.querySelector('#category');
const expenseList=document.querySelector('#content');

const total=document.querySelector('.total');
let totalExpenses = 0;

a.addEventListener("submit",function(e){
    e.preventDefault();
    
    let obj={
        name:nameIP.value,
        amount:amountIP.value,
        date:dateIP.value,
        category:categoryIP.value
    };
    console.log(obj)

    const tr=document.createElement('tr');
    tr.innerHTML=`
        <td>${obj.name}</td>
        <td>${obj.amount}</td>
        <td>${obj.date}</td>
        <td>${obj.category}</td>
        <td><button class="delete-btn"> Delete </button></td>
    `;
    
    expenseList.appendChild(tr);

    totalExpenses+=obj.amount;
    total.textContent = totalExpenses;


    // Clear the input fields after adding the expense
    nameIP.value = "";
    amountIP.value = "";
    dateIP.value = "";
    categoryIP.value = "";

    //delete functionality

    const del=tr.querySelector('.delete-btn');
    del.addEventListener('click',function(){
        totalExpenses-=obj.amount;
        total.textContent = totalExpenses;
        tr.remove();
    });
});