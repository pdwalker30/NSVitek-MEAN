import { Injectable } from "@angular/core";
import { PictureItem } from "../utilities/picture-item";

@Injectable()
export class PictureItemsService {
    private OutreachItems: PictureItem[] = [];
    private ResearchItems: PictureItem[] = [];
    private LabPeopleItems: PictureItem[] = [];


    constructor() {
        this.setupOutreachItems();
        this.setupResearchItems();
        this.setupLabPeopleItems();
    }

    private setupOutreachItems() {
        let item1Text = 
        `<p>
        Currently, I am partnering with an educator at a local, Title I elementary school in
        Gainesville, Florida to implement an after-school program that incorporates math, science,
        and museum specimens to widen that bottleneck. The program, called Supersized Life, aims to improve
        students' grasp of exponents by integrating scientific objects with quantitative problem-solving.
        The use of 3D printing also allows students to access biological objects, such as
        <a href="https://www.thingiverse.com/thing:26450">tardigrades</a>,
        <a href="https://www.rcsb.org/pdb/explore/explore.do?structureId=1AYN">viruses</a>,
        and <a href="https://morphosource.org/Detail/MediaDetail/Show/media_id/6214">fossilized small mammal molars</a>
        that are normally inaccessible because of their microscopic size.
        </p>`;
        let item1 = new PictureItem("outreach_3dprints_01", "outreach_3dprints_01.png", "Supersized Life", item1Text, "showLeft");

        let item2Text = 
        `<p>
        I helped build Fossil Roulette, a smartphone app and then a microblog, to approach one
        limitation faced by most museums: far more specimens are in the collections than can be put
        on display. Working with the collections manager of Non-Vertebrate Paleontology and the School
        of Information at the University of Texas at Austin, we developed strategies and two platforms
        to provide accurate, engaging, and concise commentary on eye-catching fossils. New entries
        are on hold while Supersized Life gets off the ground, but all entries can be found <a href="https://fossilroulette.tumblr.com/">here.</a>
        </p>`;
        let item2 = new PictureItem("outreach_fossilroulette", "outreach_fossilroulette.png", "Fossil Roulette", item2Text, "showRight");

        let item3Text = 
        `<p>
        As a team, Paul Morse and I designed and executed the Fall 2015 installation of a rotating exhibit
        highlighting student research at the <a href="https://www.floridamuseum.ufl.edu/nhdept/students/research-exhibits/2015-posters/">Florida Museum of Natural History</a>.
        We focused on how 3D technology is changing both research and broader applications of paleontology.
        Posters installed as part of the exhibit are entered into an annual competition which is judged in part based on the quality
        of the exhibit design as a whole. Posters from our installation won both of the prizes awarded that year.
        </p>`;
        let item3 = new PictureItem("outreach_exhibitsetc_01", "outreach_exhibitsetc_01.png", "Student Research Exhibit, Vertebrate Paleontology", item3Text, "showLeft");

        let item4Text = 
        `<p>
        I co-led a team to design and execute a week-long interactive exhibit as part of the celebration of 
        the Florida Museum of Natural History’s <a href="https://www.floridamuseum.ufl.edu/100years/">100th anniversary</a>. 
        Within the exhibit, we continued a successful tradition of interacting with the public through live preparation of Florida fossils. 
        We supplemented that strategy with live processing of digital specimens of some of those digital fossils. Visitors also learned and 
        interacted with us as they measured 3D prints of fossilized shark teeth and use them to estimate the body size of the largest shark 
        that ever lived. 
        </p>`
        let item4 = new PictureItem("outreach_100", "outreach_100.png", "Temporary Exhibit, Vertebrate Paleontology", item4Text, "showRight");

        this.OutreachItems.push(item1);
        this.OutreachItems.push(item2);
        this.OutreachItems.push(item3);
        this.OutreachItems.push(item4);
    }

    private setupResearchItems() {
        let item1Text = 
        ` <p>
            In the fossil record, I primarily work to understand how unbranching lineages (species or linked anagenetic species) change over time
            and in relation to their environment. Such studies are only possible in richly studied, exceptional fossil records such as that of the
            Bighorn Basin, Wyoming. There, my research is focused on changes in the dentition of lineages of small mammals through the climate change
            of the Paleocene-Eocene Thermal Maximum (PETM) ~56 million years ago
            (more on the PETM <a href="http://ngm.nationalgeographic.com/2011/10/hothouse-earth/kunzig-text">here</a>).
        </p>
        <p>
            In summer field seasons we collect fossils of these small mammals through intensive screenwashing efforts. Back in the lab,
            I digitize these fossils via microCT then use a series of morphometric analyses to quantify differences in morphology across species and
            over time (<a href="http://dx.doi.org/10.1002/ece3.3058">Vitek et al., 2017</a>). Within lineages, some aspects of shape evolve in sync with changes in climate. 
            I am currently expanding analyses to test if individualistic patterns of response to this climate change
            can be predicted by factors such as trophic category, biogeographic history, and development.
        </p>
        <p>
            A side effect of these morphometric analyses is a rigorous identification process that accounts for intraspecific variation.
            This foundational taxonomic and systematic work contributes to an unparalleled collection of data regarding the changing  abundance
            and distribution of small mammals during the high-magnitude climate change of the Paleocene-Eocene Thermal Maximum.
        </p>`;
        let item1 = new PictureItem("research_fossilmammals_01", "research_fossilmammals_01.png", "Extinct small mammals", item1Text, "showLeft");

        let item2Text = 
        `<p>
            Biological interpretations of the fossil record, including population boundaries and processes like adaptation,
            are long-standing challenges for paleontologists. My approach to this challenge is to use spatial variation in
            extant species as an analogue for the temporal variation preserved in the fossil record. If similar drivers are
            at work over both space and time, then they should leave behind a comparable patterns of spatial and temporal variation.
        </p>
        <p>
            I work to understand how biological processes shape intraspecific spatial variation in traits that fossilize well,
            particularly tooth morphology. The goal of this research is to develop models of the morphological patterns that intraspecific
            processes leave behind.
        </p>
        <p>
            Currently, I am modelling the relative contribution of population differentiation and potential climate-related
            evolution in the widespread generalist deer mouse (<i>Peromyscus maniculatus</i>). I am collaborating with researchers at
            Texas Tech University to sequence ddRAD-seq libraries for museum specimens with associated climate data and teeth.
            Together, these different sources of variation will be used to evaluate whether range shifts (modeled by phylogeographic data)
            or in-situ evolution (modelled by climate-related variation) are a more likely explanation for the intraspecific change in extinct
            species. Future research will expand the study design to a wider ecological and phylogenetic range of small mammals.
        </p>`;
        let item2 = new PictureItem("research_modern_mammals_03", "research_modern_mammals_03.png", "Extant small mammals", item2Text, "showRight");

        let item3Text = 
        `<p>
            The Eastern Box Turtle (<i>Terrapene carolina</i>), is a long-standing example of the difficulty of
            categorizing intraspecific variation across space and time. The classification of extant populations
            is still contentious after over 250 years of study. Significant amounts of geographic, allometric, and
            sexually dimorphic variation all contribute to complexity within the species. A relatively abundant
            Pleistocene record further complicates evolutionary interpretations rather than clarifying the history
            of the species.
        </p>
        <p>
            My approach to understanding spatiotemporal evolution in <i>Terrapene carolina</i> is to quantify variation of
            carapace shape, a phenotypic system that can be equally applied to fossil and modern record. Using geometric
            morphometrics and metadata available in museum collections across the United States, I am placing temporal
            variation in the context of multiple sources of variation and previous interpretations of the fossil record.
            I am currently working to understand how the presence of two sympatric morphotypes of <i>Terrapene carolina</i> in
            the Pleistocene relates to extant morphological diversity within the species.
        </p>`;
        let item3 = new PictureItem("research_boxturtle_01", "research_boxturtle_01.png", "Box Turtles", item3Text, "showLeft");

        let item4Text = 
        `<p>
            Soft-shelled turtles (Testudines: Cryptodira: Trionychidae) have a fossil record spanning six continents and
            125 million years of geologic time. Despite that wealth of opportunity, accurately discerning species limits
            and sifting out broader patterns of evolution from intraspecific variation and homoplasy is a major challenge.
            With international colleagues in Russia, Japan, and Switzerland, I take the approach of incorporating evaluations
            of intraspecific variation into taxonomic evaluations and phylogenetic analyses of Asian and North American
            fossils of soft-shelled turtles from the Cretaceous through the Miocene. Currently, I am also using their rich
            North American record as a venue for mentoring undergraduate research. Results include a comprehensive review
            of the North American fossil record of trionychids (<a href="http://dx.doi.org/10.3374/014.056.0204">Vitek and Joyce, 2015</a>)  and the
            links between patterns of gigantism, high diversity, and warm climates (<a href="http://palaeo-electronica.org/content/2012-issue-1-articles/210-giant-soft-shelled-turtles">Vitek, 2012</a>).
            To get a sense of what gigantism means for soft-shelled turtles, imagine a turtle the size of the the one in
            <a href="https://www.youtube.com/watch?v=sX8NPtW2CD8">this video</a> living in Wyoming ~50 million years ago.
        </p>`;
        let item4 = new PictureItem("research_softshell_01", "research_softshell_01.png", "Soft-Shelled Turtles", item4Text, "showRight");

        let item5Text = 
        `<p>
            As an undergraduate, I worked on a small project with Drs. Jakob Vinther, Jim Schiffbauer,
            Derek Briggs, and Rick Prum about the preservation and color patterns of a fossilized feather
            from the Messel Shale. We were able to put together a model to explain the red-and-white, striped
            coloration of an extremely well-preserved fossil by integrating taphonomy, microscopy, and physics.
            Our work went into a paper, <a href="http://dx.doi.org/10.1007/s12542-013-0173-5">“Exceptional three-dimensional preservation and coloration of an originally iridescent fossil feather from the Middle Eocene Messel Oil Shale”.</a>
        </p>`;
        let item5 = new PictureItem("research_feathers", "research_feathers.png", "Fossilized Feathers", item4Text, "showLeft");

        this.ResearchItems.push(item1);
        this.ResearchItems.push(item2);
        this.ResearchItems.push(item3);
        this.ResearchItems.push(item4);
        this.ResearchItems.push(item5);
    }

    private setupLabPeopleItems() {
        let item1Text = 
        `<p>
            Principal Investigator. I am a paleontologist studying the evolutionary consequences of intraspecific variation in the fossil record. Using morphometrics, genomics, and museum collections I integrate modern studies of microevolution with the long timescales of the fossil record. I am an assistant professor in the <a href="https://www.stonybrook.edu/ecoevo/">Department of Ecology & Evolution</a> at Stony Brook University. There are current openings for PhD students to <a href="https://www.nsvitek.com/join">join my lab</a> and develop projects.
        </p>`;
        let item1 = new PictureItem("natasha", "natasha.jpg", "Natasha S. Vitek", item1Text, "showLeft");

        let item2Text = 
        `<p>
            PhD Student. I received my Bachelor of Science in Zoology at SUNY Oswego where my research focused on assessing disparity in cranial shape in relation to ecology within a group of limbless geckos known as pygopodids. Currently, I am a graduate student in the Vitek lab focusing on vertebrate osteology. I am interested in utilizing methods such as geometric morphometrics and finite element analysis to study functional morphology over different time scales in reptiles.
        </p>`;
        let item2 = new PictureItem("George-Gurgis", "George-Gurgis.jpg", "George Gurgis", item2Text, "showLeft");

        let item3Text = 
        `<p>
            PhD Student. I came to the Vitek Lab in 2020 after graduating from the University of Akron with a B.S. in Biology and Psychology. During her undergraduate career, I studied the behavior and morphology of adhesive geckos and anoles. Now, I hope to continue to study morphology in extinct and extant reptiles.
        </p>`;
        let item3 = new PictureItem("Alex-Pamfilie", "Alex-Pamfilie.jpg", "Alexandra Pamfilie", item3Text, "showLeft");

        let item4Text = 
        `<p>
            Undergraduate Student.
        </p>`;
        let item4 = new PictureItem("Hui-Chen", "Hui-Chen.jpg", "Hui (Jason) Chen", item4Text, "showLeft");

        let item5Text = 
        `<p>
            Undergraduate Student.
        </p>`;
        let item5 = new PictureItem("Milka-Espinal", "Milka-Espinal.jpg", "Milka Espinal", item5Text, "showLeft");

        let item6Text = 
        `<p>
            Undergraduate Student. I am an incoming senior majoring in Biology and minoring in Sociology. After recently joining this lab, my research will include analyzing tooth morphology through microCT scans, in mice. Other than research in this lab, I spent a semester in Tel Aviv University analyzing trabecular and cortical bone through microCT scans in mice. Some of my favorite hobbies include volunteering in the community, traveling, and playing violin. After graduating from Stony Brook University in the Spring, I plan on attending Dental School to pursue a degree in orthodontics.
        </p>`;
        let item6 = new PictureItem("Ella-Saks", "Ella-Saks.jpg", "Ella Saks", item6Text, "showLeft");

        let item7Text = 
        `<p>
            High School Student.
        </p>`;
        let item7 = new PictureItem("Rhianna-Schantz", "Rhianna-Schantz.jpg", "Rhianna Schantz", item7Text, "showLeft");

        this.LabPeopleItems.push(item1);
        this.LabPeopleItems.push(item2);
        this.LabPeopleItems.push(item3);
        this.LabPeopleItems.push(item4);
        this.LabPeopleItems.push(item5);
        this.LabPeopleItems.push(item6);
        this.LabPeopleItems.push(item7);
    }

    public getOutreachItems(): PictureItem[] {
        return this.OutreachItems;
    }

    public getResearchItems(): PictureItem[] {
        return this.ResearchItems;
    }

    public getLabPeopleItems(): PictureItem[] {
        return this.LabPeopleItems;
    } 
}

