<script>
    import git from "../assets/footer/github.svg";
    import gmail from "../assets/footer/gmail.svg";
    import insta from "../assets/footer/instagram.svg";
    import Linkdin from "../assets/footer/linkdin.svg"
    import link from "../assets/footer/link.png"
</script>

<div class="cover" id="contact">
    <div class="contact">
        <h2>CONTACT</h2>
        <div class="links">
            <a href="https://github.com/siyam333" target="_blank" rel="noreferrer"><img class="git" src={git} alt="" /></a><a href="https://www.instagram.com/siyam_333/" target="_blank" rel="noreferrer"><img src={insta} alt="" /></a>
            <a href="https://www.linkedin.com/in/siyam-sundar-5330a324a/" target="_blank" rel="noreferrer"> <img src={Linkdin} alt="">
            </a><a href="&#109;&#97;&#105;&#108;&#116;&#111;&#58;%73%69%79%61%6D%73%75%6E%64%61%72%33%33%33%40%67%6D%61%69%6C%2E%63%6F%6D"><img src={gmail} alt=""></a>
            
            
        </div>
    </div>
    <div class="thanks">
        <div class="inspire">
            <h3>INSPIRE</h3>
            <h3>INNOVATE</h3>
            <h3>BURST IT OUT</h3>
        </div>
        <div class="ppl">
            <h3>SPECIAL THANKS TO:</h3>
            <ul>
                <li><a href="https://github.com/Rajaniraiyn" target="_blank" rel="noreferrer" style:--url="url({link})" >RAJANIRAIYN</a> </li>
                <li>TEJASWINI</li>
            </ul>
        </div>
    </div>
</div>

<style>
    .cover {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
        height: 40vh;
        background: rgb(229,250,254);
background: radial-gradient(circle, rgba(229,250,254,1) 20%, rgba(199,219,223,1) 40%, rgba(161,176,179,1) 62%, rgba(161,176,179,1) 78%, rgba(161,176,179,1) 100%);
        width: 100vw;
        color: rgb(0, 0, 0);
    }
    .contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        flex-grow: 1;
        gap: 1em;
        border-right: solid rgb(0, 0, 0);
        
    }
    .contact > h2 {
        font-size: 2em;
        margin: 0;
        letter-spacing: 0.25em;
        
    }
    .links {
        display: flex;
        gap: 0.4em;
    }
    .links >a> img {
        height: 2em;
        width: 2em;
    }
    
    .thanks{
        display: flex;
        flex-direction: row;
        flex-grow: 1;
        justify-content: space-evenly;
    }
    a{
        text-decoration: none;
        color: rgb(0, 0, 0);
    }
    li{
        list-style: none;
    }
    ul{
        display: grid;
        padding: 0;
        justify-items: center;
    }
    .inspire{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .inspire>h3{
        margin: 0;
    }
    
    .thanks>div>ul>li>a:before{
        content: '';
        background: var(--url) center/1em;
        width: 1em;
        aspect-ratio: 1;
        display: inline-block;
        
    }
    @media screen and (max-width:30em){
        
        .ppl>ul>li{
            font-size: 0.8em;
        }
    }
</style>
