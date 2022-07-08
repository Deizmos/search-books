
export interface bookType {
    kind: string,
    id: string,
    etag: string,
    selfLink: string,
    volumeInfo: {
        title: string,
        authors: [string],
        publisher: string,
        publishedDate: string,
        description: string,
        previewLink: string;
        industryIdentifiers: {
            type: string,
            identifier: string,
        }[],

        pageCount: number,

        dimensions: {
            height: string,
            width: string,
            thickness: string,
        },
        printType: string,
        mainCategory: string,
        categories: [string],
        averageRating: number,
        ratingsCount: number,
        contentVersion: string,

        imageLinks: {
            smallThumbnail: string,
            small: string,
            medium: string,
            large: string,
            extraLarge: string,
            thumbnail: string,
        },

        language: string,
        infoLink: string,
        canonicalVolumeLink: string,
    },
    saleInfo: {
        country: string,
        saleability: string,
        isEbook: boolean,
        listPrice: {
            amount: number,
            currencyCode: string,
        },
        retailPrice: {
            amount: number,
            currencyCode: string,
        },
        buyLink: string,
    },
    accessInfo: {
        country: string,
        viewability: string,
        embeddable: boolean,
        publicDomain: boolean,
        textToSpeechPermission: string,
        epub: {
            isAvailable: boolean,
            acsTokenLink: string,
        },
        pdf: {
            isAvailable: boolean
        },
        accessViewStatus: string,
    }
};

export type GetBooksResponceType = {
    items: bookType[];
    totalItems: number;
    kind: string;
};

