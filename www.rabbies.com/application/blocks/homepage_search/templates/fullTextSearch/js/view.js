$(document).ready(function() {
    function autocomplete(inp, facets, deps) {
        var currentFocus;

        function createList(e) {
            var container, items, i, val = this.value;
            closeAllLists();
            if (!val) { return false; }
            currentFocus = -1;
            if (val.length > 2) {
                container = document.createElement("UL");
                container.setAttribute("id", this.id + "autocomplete-list");
                container.setAttribute("class", "autocomplete-items");
                this.parentNode.appendChild(container);
                $('#searchMatchautocomplete-list').hide();
                // FACETS SEARCH
                facets.forEach(function(i) {
                        var searchTerm = val.toLowerCase();
                        var facet = i.toLowerCase();
                        var indexOfFirst = facet.indexOf(searchTerm);
                        if (indexOfFirst > -1) {
                            items = document.createElement("LI");
                            var reg = new RegExp(searchTerm, 'gi');
                            var haystack = i.replace(reg, function(str) {
                                return "<strong>" + str + "</strong>";
                            });
                            items.innerHTML = haystack;
                            items.innerHTML += "<input type='hidden' value='" + i + "'>";
                            items.setAttribute('data-result', i);
                            items.addEventListener("click", function(e) {
                                inp.value = this.getElementsByTagName("input")[0].value;
                                closeAllLists();
                            });
                            container.appendChild(items);
                        }
                    })
                    // DEPARTURE CITIES SEARCH
                for (i = 0; i < deps.length; i++) {
                    if (deps[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
                        items = document.createElement("LI");
                        items.innerHTML = "View all tours from <strong>" + deps[i].substr(0, val.length) + "</strong>";
                        items.innerHTML += deps[i].substr(val.length);
                        items.innerHTML += "<input type='hidden' value='" + deps[i] + "'>";
                        items.setAttribute('data-result', deps[i]);
                        items.addEventListener("click", function(e) {
                            inp.value = this.getElementsByTagName("input")[0].value;
                            closeAllLists();
                        });
                        container.appendChild(items);
                    }
                }
                // VIEW ALL RESULTS FOR SEARCH TERM
                searchTerm = document.createElement('LI');
                searchTerm.innerHTML = "View all results for <strong>" + val + "</strong>";
                searchTerm.setAttribute('data-result', val);
                searchTerm.setAttribute('class', 'all-results');
                container.appendChild(searchTerm);
            }
            clickListItem();
            $('#searchMatchautocomplete-list').slideDown('400');


        }
        inp.addEventListener("input", createList, false);
        inp.addEventListener("click", createList, false);
        inp.addEventListener("keydown", function(e) {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("li");
            if (e.keyCode == 40) { // key down                
                currentFocus++;
                addActive(x);
                updateInput();
            } else if (e.keyCode == 38) { // key up
                currentFocus--;
                addActive(x);
                e.preventDefault();
                updateInput();
                inp.setSelectionRange(inp.value.length, inp.value.length);
            } else if (e.keyCode == 13) { // enter  
                if (currentFocus > -1) {
                    if (x) x[currentFocus].click();
                }
            }
        });

        function clickListItem() {
            var list = document.getElementById("searchMatchautocomplete-list");
            if (list) {
                var listItems = list.querySelectorAll("li:not(.all-results)");
                for (var i = 0; i < listItems.length; i++) {
                    listItems[i].addEventListener("click", searchItem);
                }
            var viewAll = list.querySelector('li.all-results')
            $(viewAll).click(function(){
                $('#searchForm').submit();
            });           
            }
        }

        function searchItem() {
            var formValue = $('#searchMatch').val().toLowerCase();
            var linkDest = checkLink(formValue, links);
            if (linkDest) {
                window.location.href = linkDest;
            } else {
               $('#searchForm').submit();              
            }               
        }

        function updateInput() {
            var list = document.getElementById("searchMatchautocomplete-list");
            if (list) {
                var result = $('.autocomplete-active').data('result');
                document.getElementById('searchMatch').value = result;
            }
        }
        function checkLink(formValue, urlList) {
            return (urlList[formValue]) ? urlList[formValue] : false;
        }

        function updateInput() {
            var list = document.getElementById("searchMatchautocomplete-list");
            if (list) {
                var result = $('.autocomplete-active').data('result');
                document.getElementById('searchMatch').value = result;
            }
        }

        function removeActive(x) {
            for (var i = 0; i < x.length; i++) {
                x[i].classList.remove("autocomplete-active");
            }
        }

        function addActive(x) {
            if (!x) return false;
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            x[currentFocus].classList.add("autocomplete-active");
        }

        function closeAllLists(el) {
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) {
                if (el != x[i] && el != inp) {
                    x[i].parentNode.removeChild(x[i]);
                }
            }
        }

        document.addEventListener("click", function(e) {
            closeAllLists(e.target);
        });
        
    }
    autocomplete(document.getElementById("searchMatch"), facets, depPoints);

});