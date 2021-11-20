function initialize(){
    getMountData();  
    }; 
    document.addEventListener("DOMContentLoaded", initialize)
    
    MountURL = "https://ffxivcollect.com/api/mounts"
    
    
    function getMountData(){
        fetch(MountURL)
        .then(res => res.json())
        .then(mountData => renderMountsList(mountData))
    };
    
    //helper functions
    const createEl = tag => document.createElement(tag);
    
    
    //declarations
    const mountName = document.querySelector("#mount-list");
    const mountCard = document.querySelector("#mount-detail")
    const mountImage = document.querySelector('img')
    const mountSelectedName = document.querySelector("#name")
    const mountSelectedSeats = document.querySelector("#seats")
    const mountSelectedMovement = document.querySelector("#movement")
    const mountSelectedDescription = document.querySelector("#description")
    const mountSelectedEDescription = document.querySelector("#enhanced_description")
    const mountSelectedType = document.querySelector("#type")
    const mountSelectedText = document.querySelector("#text")
    const searchBar = document.getElementById('searchbar')
    
    function renderMountsList(mounts){
        mounts.results.forEach((mount) => {
            let li = createEl("li")
            li.innerHTML = mount.name;
            mountName.appendChild(li);
            li.dataset.image = mount.image;
            li.dataset.name = mount.name;
            li.dataset.seats = mount.seats;
            li.dataset.movement = mount.movement;
            li.dataset.description = mount.description;
            li.dataset.enhanced_description = mount.enhanced_description;
            li.dataset.type = mount.sources[0].type;
            li.dataset.text = mount.sources[0].text;
            document.querySelectorAll('li').forEach(li => li.addEventListener('click', _ => li.style.color = 'red'));
            li.addEventListener('click', (e) => {
                // console.log(e.target.dataset)
                mountImage.src = e.target.dataset.image;
                mountSelectedName.textContent = e.target.dataset.name;
                mountSelectedSeats.textContent = e.target.dataset.seats;
                mountSelectedMovement.textContent = e.target.dataset.movement;
                mountSelectedDescription.textContent = e.target.dataset.description;
                mountSelectedEDescription.textContent = e.target.dataset.enhanced_description;
                mountSelectedType.textContent = e.target.dataset.type;
                mountSelectedText.textContent = e.target.dataset.text;
                })
                searchBar.addEventListener('keyup', (e) => {
                    const searchMount = e.target.value;
                    const filteredMounts = mounts.results.filter((mount) => {
                        return (
                            mount.name.includes(searchMount));
                        })
                console.log(filteredMounts);
                })
        })}
            
            