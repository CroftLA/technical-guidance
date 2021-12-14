window.onload = function toc() {
    const h2_list = document.querySelectorAll('h2.anchored-heading')

    const ul = document.createElement('ul');
    ul.setAttribute('style', 'list-style-type:none');
    ul.setAttribute('class', 'toc__list');

    h2_list.forEach(function (h) {
        var a = document.createElement('a');
        var a_text = document.createTextNode(h.innerText);
        a.append(a_text);
        a.setAttribute('href', '#'+h.id);
        var li = document.createElement('li');
        li.append(a);
        ul.append(li);
    })

    const page_toc = document.getElementById('page_toc');
    page_toc.setAttribute('style', 'border-style:solid;border-width:1px;width:fit-content;margin-bottom:20px')

    page_toc.append(ul)
}
