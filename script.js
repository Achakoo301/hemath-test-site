function filter(cat){
document.querySelectorAll('.product-card').forEach(c=>{
c.style.display = (cat === 'all' || c.dataset.cat === cat) ? 'block' : 'none';
});
}

function openModal(product){
document.getElementById('modal').style.display = 'flex';
document.getElementById('modalTitle').innerText = product;
}

function closeModal(){
document.getElementById('modal').style.display = 'none';
}
