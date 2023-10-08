const toggleIcon = document.getElementById('toggleIcon')
                let menuList = document.getElementById('menu-list')

                toggleIcon.onclick = ()=>{
                        if(menuList.style.display == 'none'){
                                menuList.style.cssText = 
                                        `
                                                display: flex;
                                                flex-direction: column;
                                                position: absolute;
                                                top: 6em;
                                                right: 0;
                                                background-color: #1089b9;
                                                width: 100%;
                                                padding: 20px;
                                        `
                                toggleIcon.className = 'fa-solid fa-circle-xmark'
                        }else{
                                menuList.style.display = 'none'
                                toggleIcon.className = 'fas fa-list'
                        }
                        
                }