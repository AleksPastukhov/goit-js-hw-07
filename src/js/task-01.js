const сategoriesList = document.querySelectorAll('.item');

console.log(`Number of categories: ${сategoriesList.length}`);

for (let i = 0; i < сategoriesList.length; i += 1) {
  console.log(`Category: ${сategoriesList[i].children[0].innerText}`);

  console.log(`Elements: ${сategoriesList[i].children[1].children.length}`);
}
