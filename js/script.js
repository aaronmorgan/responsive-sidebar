let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#sidebar-toggle-btn");

// State on whether the user has forced the sidebar open or closed and honor it 
// during window resize events.
let sidebarIsUserCollapsed = false;

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange();
});

function menuBtnChange() {
    const sidebarContent = document.querySelector("#sidebar-content");

    if (sidebar.classList.contains("open")) {
        sidebarIsUserCollapsed = false;

        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
        sidebarContent.classList.toggle("custom-scrollbar-hidden");
    } else {
        sidebarIsUserCollapsed = true;

        closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
        sidebarContent.classList.toggle("custom-scrollbar-hidden");
    }
}

window.addEventListener("resize", (event) => {
    if (window.innerWidth < 768 && !sidebarIsUserCollapsed) {
        sidebar.classList.remove("open");
    } else {
        if (!sidebarIsUserCollapsed)
        {
        sidebar.classList.add("open");
        }
    }
});
