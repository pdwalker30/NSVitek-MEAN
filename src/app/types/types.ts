
export module OrcidInterfaces {
    export interface IOrcidInformation {
        works: IOrcidWorkGrouping[];
    }
    export interface IOrcidWork {
        publicationYear: number;
        title: string;
        journalTitle: string;
        doiString: string;
        url: string;
    }
    export interface IOrcidWorkGrouping {
        grouping: IOrcidWork[];
        workType: string;
    }
}

export interface IPictureItem {
    itemId: string;
    itemBackgroundImage: string;
    itemHeader: string;
    itemText: string;
    showLeft: boolean;
    showRight: boolean;
}
