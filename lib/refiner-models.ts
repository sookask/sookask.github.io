export type RefinerModel = {
  id: string
  family: string
  displayName: string
  modelNumber: string
  locationCode: string
  productCode: string
  supportedYears: number[]
}

export const refinerModels: RefinerModel[] = [
  {
    id: "MacBookAir8,1",
    family: "MacBook Air",
    displayName: "MacBook Air 13-tolli (2018)",
    modelNumber: "A1932",
    locationCode: "C02",
    productCode: "JK78",
    supportedYears: [2018, 2019],
  },
  {
    id: "MacBookAir8,2",
    family: "MacBook Air",
    displayName: "MacBook Air 13-tolli (2019)",
    modelNumber: "A1932",
    locationCode: "FVF",
    productCode: "LYWM",
    supportedYears: [2019, 2020],
  },
  {
    id: "MacBookAir9,1",
    family: "MacBook Air",
    displayName: "MacBook Air 13-tolli (2020)",
    modelNumber: "A2179",
    locationCode: "FVF",
    productCode: "MNHP",
    supportedYears: [2020],
  },
  {
    id: "MacBookPro15,2",
    family: "MacBook Pro",
    displayName: "MacBook Pro 13-tolli 4TBT (2018-2019)",
    modelNumber: "A1989",
    locationCode: "C02",
    productCode: "JHCC",
    supportedYears: [2018, 2019, 2020],
  },
  {
    id: "MacBookPro15,3",
    family: "MacBook Pro",
    displayName: "MacBook Pro 15-tolli (2018)",
    modelNumber: "A1990",
    locationCode: "C02",
    productCode: "LVCG",
    supportedYears: [2019],
  },
  {
    id: "MacBookPro15,1",
    family: "MacBook Pro",
    displayName: "MacBook Pro 15-tolli (2019)",
    modelNumber: "A1990",
    locationCode: "C02",
    productCode: "KGYG",
    supportedYears: [2018, 2019],
  },
  {
    id: "MacBookPro15,4",
    family: "MacBook Pro",
    displayName: "MacBook Pro 13-tolli 2TBT (2019)",
    modelNumber: "A2159",
    locationCode: "FVF",
    productCode: "L40Y",
    supportedYears: [2019, 2020],
  },
  {
    id: "MacBookPro16,1",
    family: "MacBook Pro",
    displayName: "MacBook Pro 16-tolli (2019)",
    modelNumber: "A2141",
    locationCode: "C02",
    productCode: "MD6N",
    supportedYears: [2019, 2020, 2021],
  },
  {
    id: "MacBookPro16,2",
    family: "MacBook Pro",
    displayName: "MacBook Pro 13-tolli 4TBT (2020)",
    modelNumber: "A2251",
    locationCode: "C02",
    productCode: "ML7H",
    supportedYears: [2020, 2021],
  },
  {
    id: "MacBookPro16,3",
    family: "MacBook Pro",
    displayName: "MacBook Pro 13-tolli 2TBT (2020)",
    modelNumber: "A2289",
    locationCode: "C02",
    productCode: "P3XY",
    supportedYears: [2020],
  },
  {
    id: "iMacPro1,1",
    family: "iMac",
    displayName: "iMac Pro (2017)",
    modelNumber: "A1862",
    locationCode: "C02",
    productCode: "HX87",
    supportedYears: [2017, 2018, 2019, 2020, 2021],
  },
  {
    id: "iMac20,2",
    family: "iMac",
    displayName: "iMac Retina 5K, 27-tolli (2020)",
    modelNumber: "A2115",
    locationCode: "C02",
    productCode: "046M",
    supportedYears: [2020, 2021, 2022],
  },
  {
    id: "Macmini8,1",
    family: "Mac mini",
    displayName: "Mac mini (2018)",
    modelNumber: "A1993",
    locationCode: "C07",
    productCode: "JYVX",
    supportedYears: [2018, 2019, 2020, 2021, 2022, 2023],
  },
]

export const refinerModelMap = Object.fromEntries(
  refinerModels.map((model) => [model.id, model])
) as Record<string, RefinerModel>
