export const BASE_URL = "https://rizzpharma.thrivewellrx.com";

export interface Category {
    CategoryId: string | number;
    Category: string;
    CategoryPhotos: string | null;
    QuizCategoryName: string | null;
    QuizCategoryImage: string | null;
}

export interface Product {
    ProductId: number;
    IsPrescriptionGenerationRequired: boolean;
    IsAcknowledgmentRequired: boolean;
    Name: string;
    Price: number;
    LowestPrice: number | null;
    ConsultancyFee: number | null;
    MedicineType: string | null;
    CoverPhoto: string | null;
    PreviewUrl: string | null;
    IntakeFormScreenUrl: string | null;
    CategoryId: number;
    Category: string;
    ShippingCharge: number | null;
    LabCharge: number | null;
    IsCompounded: boolean;
    IsPerMonth: boolean;
    IsStartWithLowest: boolean;
    IsOutOfStock: boolean;
    ContentAlignment: string | null;
    TotalDoes: number | null;
    Doses: string | null;
    AboutTheProduct: string | null;
    HealthBenefits: string | null;
}

export interface CategoryWithProducts {
    CategoryId: number;
    Category: string;
    Products: Product[];
}

const COMMON_HEADERS = {
    moduleid: "524",
    tabid: "95",
    "Content-Type": "application/json",
};

// Static fallbacks as requested
export const STATIC_CATEGORIES: Category[] = [
    {
        CategoryId: "2",
        Category: "Weight Loss",
        CategoryPhotos: "/Portals/0/Images/category/category-6.png",
        QuizCategoryName: "Weight Loss",
        QuizCategoryImage: "./images/category-6.png",
    },
    {
        CategoryId: "3",
        Category: "Sexual Health",
        CategoryPhotos: "/Portals/0/Images/category/category-3.png",
        QuizCategoryName: "Sexual Health",
        QuizCategoryImage: "./images/category-3.png",
    },
    {
        CategoryId: "4",
        Category: "Brain Health",
        CategoryPhotos: "./images/category-4.png",
        QuizCategoryName: "Brain Health",
        QuizCategoryImage: "./images/category-4.png",
    },
    {
        CategoryId: "5",
        Category: "Testosterone HRT",
        CategoryPhotos: "./images/category-2.png",
        QuizCategoryName: "Testosterone HRT",
        QuizCategoryImage: "./images/category-2.png",
    },
    {
        CategoryId: "6",
        Category: "Athletic Performance",
        CategoryPhotos: "./images/category-5.png",
        QuizCategoryName: "Athletic Performance",
        QuizCategoryImage: "./images/category-5.png",
    },
    {
        CategoryId: "7",
        Category: "Beauty and Hair Loss",
        CategoryPhotos: "./images/category-1.png",
        QuizCategoryName: "Beauty and Hair Loss",
        QuizCategoryImage: "./images/category-1.png",
    },
];

export const STATIC_PRODUCTS: CategoryWithProducts[] = [
    {
        CategoryId: 2,
        Category: "Weight Loss",
        Products: [
            {
                ProductId: 8,
                IsPrescriptionGenerationRequired: true,
                IsAcknowledgmentRequired: true,
                Name: "2X Blend Tesamorelin (10mg) / Ipamorelin (5mg)",
                Price: 199.00,
                LowestPrice: 0.0,
                ConsultancyFee: 45.00,
                MedicineType: "Injection",
                CoverPhoto: "/Portals/0/Images/Products/f521e0fa-0350-431c-aa43-817603e60fc7_0.png",
                PreviewUrl: "https://rizzpharma.thrivewellrx.com/Order/ctl/Preview/mid/524/tid/8",
                IntakeFormScreenUrl: null,
                CategoryId: 2,
                Category: "Weight Loss",
                ShippingCharge: null,
                LabCharge: null,
                IsCompounded: false,
                IsPerMonth: false,
                IsStartWithLowest: false,
                IsOutOfStock: false,
                ContentAlignment: "2",
                TotalDoes: 0,
                Doses: "409, 10 mg,199.00,1,,",
                AboutTheProduct: "The 2X Blend (Tesamorelin/Ipamorelin) combines two potent peptides for growth hormone stimulation.",
                HealthBenefits: "Hormonal Optimization,Metabolism Boost,Muscle Recovery & Growth"
            }
        ]
    }
];

export async function fetchLandingCategories(): Promise<Category[]> {
    try {
        const response = await fetch(`${BASE_URL}/API/Order.RL.Module/OrderRL//GetLandingCategories`, {
            method: "GET",
            headers: COMMON_HEADERS,
        });
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        console.error("Error fetching categories, using static data:", error);
        return STATIC_CATEGORIES;
    }
}

export async function fetchLandingProducts(): Promise<CategoryWithProducts[]> {
    try {
        const response = await fetch(`${BASE_URL}/API/Order.RL.Module/OrderRL//GetLandingProducts`, {
            method: "GET",
            headers: COMMON_HEADERS,
        });
        if (!response.ok) throw new Error("Network response was not ok");
        return await response.json();
    } catch (error) {
        console.error("Error fetching products, using static data:", error);
        return STATIC_PRODUCTS;
    }
}
