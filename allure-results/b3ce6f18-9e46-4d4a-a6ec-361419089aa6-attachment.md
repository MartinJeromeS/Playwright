# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.js >> Flipkart Test
- Location: tests\example.spec.js:28:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.goto: Test timeout of 30000ms exceeded.
Call log:
  - navigating to "https://www.flipkart.com/", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e13]:
    - generic [ref=e16]:
      - generic [ref=e18]:
        - generic [ref=e27]:
          - generic [ref=e29]:
            - img "Image" [ref=e32]
            - img "Image" [ref=e35]
          - link [ref=e37]:
            - /url: /flights-travel-uhp-at-store?marketplace=FKT
            - img "Image" [ref=e40]
            - img "Image" [ref=e43]
        - generic [ref=e53]:
          - generic [ref=e54]: Location not set
          - generic [ref=e59]: Select delivery location
      - banner [ref=e70]:
        - generic [ref=e74]:
          - button "Search for Products, Brands and More" [ref=e75] [cursor=pointer]:
            - img "Search Icon" [ref=e76]
          - textbox "Search for Products, Brands and More" [ref=e80]
        - generic [ref=e81]:
          - generic [ref=e86]:
            - link "Login" [ref=e87] [cursor=pointer]:
              - /url: /login?ret=/
              - img "Login" [ref=e88]
            - img "Chevron" [ref=e90]
          - generic [ref=e95]:
            - link "More" [ref=e96] [cursor=pointer]:
              - /url: "#"
            - img "Chevron" [ref=e98]
          - link "Cart Cart" [ref=e101]:
            - /url: /viewcart?marketplace=FLIPKART
            - img "Cart" [ref=e102]
            - generic [ref=e103]: Cart
      - generic [ref=e105]:
        - link [ref=e110]:
          - /url: https://www.flipkart.com/
          - heading "For You" [level=1] [ref=e116]
        - link "Fashion" [ref=e121]:
          - /url: /ss-26-base-inline-at-store
        - link "Mobiles" [ref=e132]:
          - /url: /mobile-phones-store
        - link "Electronics" [ref=e143]:
          - /url: /new-elec-clp-march-at-store
        - link "Beauty" [ref=e154]:
          - /url: /bpc-bau-new-inline-at-store
        - link "Home" [ref=e165]:
          - /url: /home-kitchen-25-at-store
        - link "Appliances" [ref=e176]:
          - /url: /tv-and-appliances-inline-ab-at-store
        - link "Toys, baby.." [ref=e187]:
          - /url: /toysbc-new26-inline-at-store
        - link "Food & Health" [ref=e198]:
          - /url: /fnhc-2025-new-at-store
        - link "Auto Accessories" [ref=e209]:
          - /url: /aa-2025-new-at-store
        - link "Sports & Fitness" [ref=e220]:
          - /url: /sf-inline-2025-at-store
        - link "Furniture" [ref=e231]:
          - /url: /india-ka-furniture-studio-inlines-at-store
        - link "Books" [ref=e242]:
          - /url: /books-at-store
        - link "2 Wheelers" [ref=e253]:
          - /url: /twowheelers-at-store
    - generic [ref=e267]:
      - generic [ref=e282]:
        - link [ref=e289]:
          - /url: /mobiles/~cs-vw1btxxcwt/pr?sid=tyy%2C4io&collection-tab-name=Apple+iPhone+Duo&param=29929&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=TEP5OGCGXHEW_IAD
          - img "Image" [ref=e292]
        - link [ref=e299]:
          - /url: /washing-machines/pr?sid=j9e%2Cabm%2C8qx&p%5B%5D=facets.function_type%255B%255D%3DFully%2BAutomatic%2BFront%2BLoad&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiSUFEIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fX19fQ%3D%3D&nnc=AQNW2WHSOE16_IAD
          - img "Image" [ref=e302]
        - link [ref=e309]:
          - /url: /infinix-hot-60i-5g-shadow-blue-128-gb/p/itm1cb6bf875f6e0?pid=MOBHERZERAFFCH7M&marketplace=FLIPKART&lid=LSTMOBHERZERAFFCH7MDSZZDP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=KATIVMUW5PSO_AD
          - img "Image" [ref=e312]
        - link [ref=e319]:
          - /url: /ai-nova-2-neo-5g-blue-64-gb/p/itm9cecebc4cb5bb?pid=MOBHZ8ZMUE2GBADZ&marketplace=FLIPKART&lid=LSTMOBHZ8ZMUE2GBADZGIDDQX&fm=organic&pageUID=1792069384838&param=1612&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=UQA3ROS9L8OB_AD
          - img "Image" [ref=e322]
        - link [ref=e329]:
          - /url: /vivo-t5x-5g-cosmic-green-128-gb/p/itm7da8aa253e72b?pid=MOBHQC8ZMRCP62TS&marketplace=FLIPKART&lid=LSTMOBHQC8ZMRCP62TSTXXKV0&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CWQCRBABANPY_AD
          - img "Image" [ref=e332]
        - link [ref=e339]:
          - /url: /j9e/abm/8qx/~cs-w6h4pl4a67/pr?sid=j9e%2Cabm%2C8qx&collection-tab-name=LG+WM+-+FL&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=MCDDROZGEHM1_AD
          - img "Image" [ref=e342]
        - link [ref=e349]:
          - /url: /samsung-galaxy-a36-5g-dark-green-128-gb/p/itmc39f6516e0cab?pid=MOBHNJ8FASRHRJZS&marketplace=FLIPKART&lid=LSTMOBHNJ8FASRHRJZSYZZ9MP&pageUID=1791574940928&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=41JADG4HZOUQ_AD
          - img "Image" [ref=e352]
        - link [ref=e359]:
          - /url: /water-purifiers/~cs-pislnwh372/pr?sid=j9e%2Cabm%2Ci45&collection-tab-name=LIVPURE+-+WAP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=K4AMZ0U3XFDK_AD
          - img "Image" [ref=e362]
        - link [ref=e369]:
          - /url: http://flipkart.com/footwear/~cs-4r24uzbj6l/pr?sid=osp&collection-tab-name=Campus_Men&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=N0HORU42H4AP_AD
          - img "Image" [ref=e372]
        - link [ref=e379]:
          - /url: /laptops/~cs-1ff5isiib3/pr?sid=6bo%2Cb5g&collection-tab-name=Laptops&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=25PUTYETNQC2_AD
          - img "Image" [ref=e382]
      - link [ref=e404]:
        - /url: /xiaomi-x-pro-cinemagiqled-138-cm-55-inch-qled-ultra-hd-4k-smart-google-tv-dolby-vision-hdr-10-32-gb-storage-34w-audio-sound-film-maker-mode-120-hz-game-booster-mi/p/itm89eea231e000a?pid=TVSHA75EDRTTY8QR&lid=LSTTVSHA75EDRTTY8QRGRA5ZA&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=ZSOV6SKHBPR6_AD
        - img "Image" [ref=e410]
      - generic [ref=e420]:
        - generic [ref=e424]:
          - img "Image" [ref=e427]
          - generic [ref=e428]: Interesting finds
        - generic [ref=e434]:
          - link "Image Comfy Feels From ₹199" [ref=e439]:
            - /url: /womens-footwear/womens-flats/~womens-sandals/pr?sid=osp%2Ciko%2C9d5&p%5B%5D=facets.price_range.from%3D199&p%5B%5D=facets.price_range.to%3DMax&p%5B%5D=facets.brand%255B%255D%3DKhadim%2527s&p%5B%5D=facets.brand%255B%255D%3DSHOETOPIA&p%5B%5D=facets.brand%255B%255D%3DDOCTOR%2BEXTRA%2BSOFT&p%5B%5D=facets.brand%255B%255D%3DTRASE&p%5B%5D=facets.brand%255B%255D%3DMarc%2BLoire&p%5B%5D=facets.brand%255B%255D%3DLayasa&p%5B%5D=facets.brand%255B%255D%3DLongwalk&p%5B%5D=facets.brand%255B%255D%3DMoonwalk&p%5B%5D=facets.brand%255B%255D%3DZapatoz&p%5B%5D=facets.brand%255B%255D%3DDeals4you&p%5B%5D=facets.brand%255B%255D%3DDenill&p%5B%5D=facets.brand%255B%255D%3DNeemans&p%5B%5D=facets.brand%255B%255D%3DShezone&p%5B%5D=facets.brand%255B%255D%3DVENDOZ&p%5B%5D=facets.brand%255B%255D%3DWELCOME&p%5B%5D=facets.brand%255B%255D%3DSvaar&p%5B%5D=facets.brand%255B%255D%3DPaduki&p%5B%5D=facets.brand%255B%255D%3DShoestail&p%5B%5D=facets.brand%255B%255D%3DTWINSSHOE&p%5B%5D=facets.brand%255B%255D%3DKoburg&p%5B%5D=facets.brand%255B%255D%3DFAUSTO&p%5B%5D=facets.brand%255B%255D%3Daadi&p%5B%5D=facets.brand%255B%255D%3DBirde&p%5B%5D=facets.brand%255B%255D%3DK%2527%2BFootlance&p%5B%5D=facets.brand%255B%255D%3DK-Footlance&p%5B%5D=facets.brand%255B%255D%3DPicktoes&p%5B%5D=facets.brand%255B%255D%3DPinkToes&p%5B%5D=facets.brand%255B%255D%3DPicktoe&p%5B%5D=facets.brand%255B%255D%3DSK%2BFashion&p%5B%5D=facets.brand%255B%255D%3DXE%2BLooks&p%5B%5D=facets.brand%255B%255D%3DBambam&p%5B%5D=facets.brand%255B%255D%3DBERSACHE&p%5B%5D=facets.brand%255B%255D%3DFabbmate&p%5B%5D=facets.brand%255B%255D%3DEL%2BPASO&p%5B%5D=facets.occasion%255B%255D%3DEthnic&param=5678&hpid=FLPz_QkysrFos6qH6yQRJap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJGcm9tIOKCuTE5OSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlNOREhHOURYWVRROEM3SkIiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJFdGhuaWMgRmxhdHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19
            - img "Image" [ref=e449]
            - generic [ref=e452]:
              - generic [ref=e453]: Comfy Feels
              - generic [ref=e454]: From ₹199
          - link "Image Best Deal Under ₹469" [ref=e459]:
            - /url: /mens-footwear/~cs-f00ii5dh9h/pr?sid=osp%2Ccil&collection-tab-name=Men+shoes&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D469&param=3457&hpid=z6asBIwa5UROYW8xUnsYBKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJVbmRlciDigrk0NjkiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19LCJoZXJvUGlkIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6Imhlcm9QaWQiLCJpbmZlcmVuY2VUeXBlIjoiUElEIiwidmFsdWUiOiJTSE9HQ05aWVRYRlJHVEhBIiwidmFsdWVUeXBlIjoiU0lOR0xFX1ZBTFVFRCJ9fSwidGl0bGUiOnsibXVsdGlWYWx1ZWRBdHRyaWJ1dGUiOnsia2V5IjoidGl0bGUiLCJpbmZlcmVuY2VUeXBlIjoiVElUTEUiLCJ2YWx1ZXMiOlsiTWVuIFNob2VzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e469]
            - generic [ref=e472]:
              - generic [ref=e473]: Best Deal
              - generic [ref=e474]: Under ₹469
          - link "Image Grab or Gone Min 50% Off" [ref=e479]:
            - /url: /kitchen-cookware-serveware/cookware/pressure-cookers/pr?sid=upp%2Ctnx%2Cgsl&marketplace=FLIPKART&p%5B%5D=facets.discount_range_v1%255B%255D%3D50%2525%2Bor%2Bmore&hpid=dC9e0r-R6jB8-ZsmLeHoXKp7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyJNaW4gNTAlIE9mZiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX0sImhlcm9QaWQiOnsic2luZ2xlVmFsdWVBdHRyaWJ1dGUiOnsia2V5IjoiaGVyb1BpZCIsImluZmVyZW5jZVR5cGUiOiJQSUQiLCJ2YWx1ZSI6IlBSQ0ZHRlpUWkZHQUZTVUgiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19LCJ0aXRsZSI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ0aXRsZSIsImluZmVyZW5jZVR5cGUiOiJUSVRMRSIsInZhbHVlcyI6WyJQcmVzc3VyZSBDb29rZXJzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e489]
            - generic [ref=e492]:
              - generic [ref=e493]: Grab or Gone
              - generic [ref=e494]: Min 50% Off
          - link "Image Top Offer 65-80% Off" [ref=e499]:
            - /url: /womens-ethnic-sets/pr?sid=clo%2Ccfv%2Citg%2Ctys&p%5B%5D=facets.discount_range_v1%255B%255D%3D60%2525%2Bor%2Bmore&Param=347654&hpid=hW7ITBfD--NtOF6LYfadmap7_Hsxr70nj65vMAAFKlc%3D&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InZhbHVlQ2FsbG91dCI6eyJtdWx0aVZhbHVlZEF0dHJpYnV0ZSI6eyJrZXkiOiJ2YWx1ZUNhbGxvdXQiLCJpbmZlcmVuY2VUeXBlIjoiVkFMVUVfQ0FMTE9VVCIsInZhbHVlcyI6WyI2NS04MCUgT2ZmIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fSwiaGVyb1BpZCI6eyJzaW5nbGVWYWx1ZUF0dHJpYnV0ZSI6eyJrZXkiOiJoZXJvUGlkIiwiaW5mZXJlbmNlVHlwZSI6IlBJRCIsInZhbHVlIjoiRVRISEZZWktBR0NaTUhXRiIsInZhbHVlVHlwZSI6IlNJTkdMRV9WQUxVRUQifX0sInRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkt1cnRhIHNldHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19
            - img "Image" [ref=e509]
            - generic [ref=e512]:
              - generic [ref=e513]: Top Offer
              - generic [ref=e514]: 65-80% Off
      - generic [ref=e524]:
        - generic [ref=e528]:
          - img "Image" [ref=e531]
          - generic [ref=e533]:
            - generic [ref=e534]: Best Gadgets & Appliances
            - link [ref=e536]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_1~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART
        - generic [ref=e543]:
          - link "Image Bikes & Scooters Special offer" [ref=e548]:
            - /url: https://www.flipkart.com/all/~cs-e9a7af9a13271add16a2ebb0ba329fea/pr?sid=7dk,0aj&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e558]
            - generic [ref=e561]:
              - generic [ref=e562]: Bikes & Scooters
              - generic [ref=e563]: Special offer
          - link "Image Shavers Min. 50% Off" [ref=e568]:
            - /url: https://www.flipkart.com/all/~cs-6f73066a691d71e2948a4b66ea1864fc/pr?sid=zlw,79s,u3j&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e578]
            - generic [ref=e581]:
              - generic [ref=e582]: Shavers
              - generic [ref=e583]: Min. 50% Off
          - link "Image Trimmers Min. 50% Off" [ref=e588]:
            - /url: https://www.flipkart.com/all/~cs-fcd986f0a357ac4dbc7f91b70631e4b1/pr?sid=zlw,79s,by3&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e598]
            - generic [ref=e601]:
              - generic [ref=e602]: Trimmers
              - generic [ref=e603]: Min. 50% Off
          - link "Image Gaming Laptops Best Picks" [ref=e608]:
            - /url: https://www.flipkart.com/all/~cs-e5bf65b5e35993f5247b836aeef41f53/pr?sid=4rr,tz1&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e618]
            - generic [ref=e621]:
              - generic [ref=e622]: Gaming Laptops
              - generic [ref=e623]: Best Picks
      - generic [ref=e633]:
        - generic [ref=e634]: In The Spotlight
        - generic [ref=e640]:
          - generic [ref=e641]:
            - link [ref=e646]:
              - /url: /audio-video/~cs-w84fwnj3t2/pr?sid=0pm&collection-tab-name=5.1+Channel+Soundbars&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=971Z0F2ZOCXO_AD
              - img "Image" [ref=e649]
            - link [ref=e654]:
              - /url: /wearable-smart-devices/smart-glasses/fire-boltt~brand/pr?sid=ajy%2Ctcy&marketplace=FLIPKART&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=IUJ4OV3BZH7D_AD
              - img "Image" [ref=e657]
            - link [ref=e662]:
              - /url: /boltt-evo-lavender-bloom-64-gb/p/itmf046d663a1fd7?pid=MOBHPP59AEJZHCVZ&marketplace=FLIPKART&lid=LSTMOBHPP59AEJZHCVZQQSXMU&pageUID=1791970766503&param=1791981490426&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HIPRLAOP0V34_AD
              - img "Image" [ref=e665]
            - link [ref=e670]:
              - /url: /ckf/czl/~cs-s0otj1nerp/pr?sid=ckf%2Cczl&collection-tab-name=LG+UHD+TVs&sort=popularity&param=1791194954725&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=HTMN2Y66XZXY_AD
              - img "Image" [ref=e673]
            - link [ref=e678]:
              - /url: /health-care/~cs-c9ft4xmab3/pr?sid=hlc&collection-tab-name=Dettol&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Z8HBB74PO27H_AD
              - img "Image" [ref=e681]
            - link [ref=e686]:
              - /url: /audio-video/~cs-sejsb1vc1h/pr?sid=0pm&collection-tab-name=boAt-Party+Speakers&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=6EK3A2UXBJYP_AD
              - img "Image" [ref=e689]
            - link [ref=e694]:
              - /url: /mivi-duopods-zig-tws-13mm-bass-ai-enc-hd-calls-70h-pt-bluetooth/p/itm1e41207f1c318?pid=SMWH6DTZYW7YDWRS&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=NIWXCBLLMFMH_AD
              - img "Image" [ref=e697]
            - link [ref=e702]:
              - /url: /food-products/~cs-e04u5co0s5/pr?sid=eat&collection-tab-name=Wonderland&pageCriteria=default&param=1231&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=SXIPJUK8ZDGM_AD
              - img "Image" [ref=e705]
            - link [ref=e710]:
              - /url: /triggr-kraken-x4-13mm-drivers-40ms-latency-enc-60h-battery-rubber-finish-v5-4-bluetooth-gaming/p/itm11fd34f2ddfb6?pid=SMWH6WJWHDHFMGAG&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=Y38RSFAUAGJY_AD
              - img "Image" [ref=e713]
            - link [ref=e718]:
              - /url: /water-purifiers/~cs-tf90uvo8ni/pr?sid=j9e%2Cabm%2Ci45&collection-tab-name=EFL+-+WAP&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=FVOHHUGW0B33_AD
              - img "Image" [ref=e721]
          - button [ref=e722]
      - generic [ref=e734]:
        - generic [ref=e738]:
          - img "Image" [ref=e741]
          - generic [ref=e742]: Top deals on tech
        - generic [ref=e749]:
          - generic [ref=e750]:
            - link [ref=e755]:
              - /url: /samsung-galaxy-s25-fe-5g-jetblack-128-gb/p/itm90e887b150eea?pid=MOBHQCH6FPTX5FZ2&marketplace=FLIPKART&lid=LSTMOBHQCH6FPTX5FZ26HBEZT
              - img "Image" [ref=e758]
            - link [ref=e763]:
              - /url: /televisions/~cs-7jru1mnlh8/pr?sid=ckf%2Cczl&collection-tab-name=55+TVs+HP-1&sort=popularity
              - img "Image" [ref=e766]
            - link [ref=e771]:
              - /url: /tablets/~cs-ue8mq0dmtp/pr?sid=tyy%2Chry&collection-tab-name=Moto+Neo+4&sort=price_asc&p%5B%5D=facets.availability%255B%255D%3DExclude%2BOut%2Bof%2BStock
              - img "Image" [ref=e774]
            - link [ref=e779]:
              - /url: /nothing-phone-4b-blue-128-gb/p/itm939608b40adbb?pid=MOBHQENA4YWRRHWE&marketplace=FLIPKART&lid=LSTMOBHQENA4YWRRHWE0IJQMJ&hl_lid=LSTMOBHQENA4YWRRHWEJKNUEM
              - img "Image" [ref=e782]
            - link [ref=e787]:
              - /url: /6bo/b5g/~cs-wsaoaki3kp/pr?sid=6bo,b5g&collection-tab-name=samsung&sort=price_asc&PARAM=8767
              - img "Image" [ref=e790]
            - link [ref=e795]:
              - /url: /televisions/~cs-cyapkgopqc/pr?sid=ckf%2Cczl&collection-tab-name=Thomson+TVs+BBD&sort=popularity
              - img "Image" [ref=e798]
            - link [ref=e803]:
              - /url: /samsung-a36-5g-dark-blue-128-gb/p/itm2efbf47502056?pid=MOBHNJ8FRCKPXUAS&marketplace=FLIPKART&lid=LSTMOBHNJ8FRCKPXUAS8VW8UN&param=436466
              - img "Image" [ref=e806]
            - link [ref=e811]:
              - /url: /mobile-accessories/~cs-2jdblwzc7p/pr?sid=tyy%2C4mr%2Cfu6&collection-tab-name=compact&sort=price_asc
              - img "Image" [ref=e814]
            - link [ref=e819]:
              - /url: /home-kitchen/home-appliances/washing-machines/fully-automatic-top-load~function/pr?sid=j9e%2Cabm%2C8qx
              - img "Image" [ref=e822]
          - button "Next Slide" [ref=e823]
      - generic [ref=e837]:
        - generic [ref=e841]:
          - img "Image" [ref=e844]
          - generic [ref=e845]: New deals every hour
        - generic [ref=e852]:
          - generic [ref=e853]:
            - link [ref=e858]:
              - /url: /mens-tshirts/pr?sid=clo%2Cash%2Cank%2Cedy&otracker%5B%5D=categorytree&otracker%5B%5D=nmenu_sub_Men_0_T-Shirts&p%5B%5D=facets.price_range.from%3DMin&p%5B%5D=facets.price_range.to%3D400&p%5B%5D=facets.brand%255B%255D%3DREEBOK&p%5B%5D=facets.brand%255B%255D%3DPUMA&sort=price_desc&param=12344
              - img "Image" [ref=e861]
            - link [ref=e866]:
              - /url: /0pm/~cs-7126z6bvmd/pr?sid=0pm&collection-tab-name=boAt+earphpones
              - img "Image" [ref=e869]
            - img "Image" [ref=e877]
            - link [ref=e882]:
              - /url: /j9e/m38/hzg/~cs-9xec2idlzs/pr?sid=j9e,m38,hzg&collection-tab-name=BBD+Ref+Tick+tock
              - img "Image" [ref=e885]
            - img "Image" [ref=e893]
            - img "Image" [ref=e901]
          - button "Next Slide" [ref=e902]
      - generic [ref=e916]:
        - generic [ref=e920]:
          - img "Image" [ref=e923]
          - generic [ref=e925]:
            - generic [ref=e926]: Must-have Electronics & Appliances
            - link [ref=e928]:
              - /url: /offers-list/recommended-for-you?screen=dynamic&pk=contentTags%3DGCD_THEME_5~marketplace%3DFLIPKART~widgetType%3DdealCardV3~contentType%3DpersonalisedRecommendation%2FC5&marketplace=FLIPKART
        - generic [ref=e935]:
          - link "Image Mobile Body Panels Min. 50% Off" [ref=e940]:
            - /url: https://www.flipkart.com/all/~cs-68acdcc00524bb405486423ab89d4b18/pr?sid=tyy,4mr,ukk&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e950]
            - generic [ref=e953]:
              - generic [ref=e954]: Mobile Body Panels
              - generic [ref=e955]: Min. 50% Off
          - link "Image Mobile Skin Stickers Min. 50% Off" [ref=e960]:
            - /url: https://www.flipkart.com/all/~cs-0e2734d716610eebc089bedc830dd662/pr?sid=tyy,4mr,mr4,00w&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e970]
            - generic [ref=e973]:
              - generic [ref=e974]: Mobile Skin Stickers
              - generic [ref=e975]: Min. 50% Off
          - link "Image Power Banks Min. 50% Off" [ref=e980]:
            - /url: https://www.flipkart.com/all/~cs-5447acab9094df30966ed1ae80389723/pr?sid=tyy,4mr,fu6&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e990]
            - generic [ref=e993]:
              - generic [ref=e994]: Power Banks
              - generic [ref=e995]: Min. 50% Off
          - link "Image Mobiles Min. 50% Off" [ref=e1000]:
            - /url: https://www.flipkart.com/all/~cs-b364eef2a83b8798cb08ea449878c98d/pr?sid=tyy,4io&marketplace=FLIPKART&restrictLocale=true
            - img "Image" [ref=e1010]
            - generic [ref=e1013]:
              - generic [ref=e1014]: Mobiles
              - generic [ref=e1015]: Min. 50% Off
      - generic [ref=e1027]:
        - generic [ref=e1028]:
          - link "Image Credit Card" [ref=e1033]:
            - /url: https://www.flipkart.com/fpg/cbc/store-page?productType=CC&utm_source=Allcat_OTA&utm_source_context=Allcat_nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkNyZWRpdCBDYXJkIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1036]
            - generic [ref=e1037]: Credit Card
          - link "Image EMI" [ref=e1042]:
            - /url: https://www.flipkart.com/rv/fpg/cfa/ntb/ce?emiType=cfa-term-loan&productCode=CREDIT_MARKETPLACE&utmSource=ADS&utmContext=FKEMI_Nav&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkVNSSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e1045]
            - generic [ref=e1046]: EMI
          - link "Image Pay Later" [ref=e1051]:
            - /url: https://www.flipkart.com/rv/fpg/bnpl?utmSource=fk-fpl107&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSBMYXRlciJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e1054]
            - generic [ref=e1055]: Pay Later
          - link "Image 2 Wheelers" [ref=e1060]:
            - /url: /7dk/0aj/~cs-l0abbrtwvr/pr?sid=7dk%2C0aj&collection-tab-name=Top+Deals+on+Bikes+and+Scooters&pageCriteria=default&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIjIgV2hlZWxlcnMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19
            - img "Image" [ref=e1063]
            - generic [ref=e1064]: 2 Wheelers
          - link "Image Loans" [ref=e1069]:
            - /url: https://www.flipkart.com/sumo-3p/pl/pages/journey?utm_source=Home_Page&utm_campaign=Nav_Base&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkxvYW5zIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1072]
            - generic [ref=e1073]: Loans
          - link "Image Gift Cards" [ref=e1078]:
            - /url: /gift-card-at-store?param=7654567&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkdpZnQgQ2FyZHMiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19
            - img "Image" [ref=e1081]
            - generic [ref=e1082]: Gift Cards
          - link "Image Sell Phone" [ref=e1087]:
            - /url: /reset-sell-store?param=3382&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlNlbGwgUGhvbmUiXSwidmFsdWVUeXBlIjoiTVVMVElfVkFMVUVEIn19fX19
            - img "Image" [ref=e1090]
            - generic [ref=e1091]: Sell Phone
          - link "Image SuperCoin" [ref=e1096]:
            - /url: /supercoin?param=76523&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlN1cGVyQ29pbiJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e1099]
            - generic [ref=e1100]: SuperCoin
          - link "Image BLACK" [ref=e1105]:
            - /url: /flipkart-black-store?param=389440&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkJMQUNLIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1108]
            - generic [ref=e1109]: BLACK
          - link "Image Pay" [ref=e1114]:
            - /url: /flipkart-pay-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlBheSJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e1117]
            - generic [ref=e1118]: Pay
          - link "Image For GenZ" [ref=e1123]:
            - /url: /ls-tbbd-26-genz-men-inline-at-store?param=345678&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIkZvciBHZW5aIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1126]
            - generic [ref=e1127]: For GenZ
          - link "Image Originals" [ref=e1132]:
            - /url: /flipkart-originals-large-at-store?ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk9yaWdpbmFscyJdLCJ2YWx1ZVR5cGUiOiJNVUxUSV9WQUxVRUQifX19fX0%3D
            - img "Image" [ref=e1135]
            - generic [ref=e1136]: Originals
          - link "Image Vouchers" [ref=e1141]:
            - /url: /bv1-gift-card-at-store?param=4264&pageUID=1791823084665&param=787193&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIlZvdWNoZXJzIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1144]
            - generic [ref=e1145]: Vouchers
          - link "Image Next Gen" [ref=e1150]:
            - /url: /nextgen-brands-spl-store?param=7478&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InRpdGxlIjp7Im11bHRpVmFsdWVkQXR0cmlidXRlIjp7ImtleSI6InRpdGxlIiwiaW5mZXJlbmNlVHlwZSI6IlRJVExFIiwidmFsdWVzIjpbIk5leHQgR2VuIl0sInZhbHVlVHlwZSI6Ik1VTFRJX1ZBTFVFRCJ9fX19fQ%3D%3D
            - img "Image" [ref=e1153]
            - generic [ref=e1154]: Next Gen
        - button [ref=e1155]
      - generic [ref=e1167]:
        - generic [ref=e1168]: Featured Brands
        - generic [ref=e1174]:
          - generic [ref=e1175]:
            - link [ref=e1180]:
              - /url: /refrigerators/~cs-vytdf2qekz/pr?sid=j9e%2Cabm%2Chzg&collection-tab-name=Samsung+Ref+-+FF&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=LNK9P1QMLPO7_AD
              - img "Image" [ref=e1183]
            - link [ref=e1188]:
              - /url: /ilife-t20s-ultra-self-emptying-robot-vacuum-lidar-navigation-strong-suction-robotic-floor-cleaner-reusable-dust-bag-anti-bacterial-cleaning-2-1-mopping-wifi-connectivity-google-assistant-alexa/p/itmcb26c899d2f0b?pid=VCLHPE3BZ9MH74XY&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=CO75Y6K1RMFM_AD
              - img "Image" [ref=e1191]
            - link [ref=e1196]:
              - /url: /beauty-and-grooming/~cs-j1ji9f1qya/pr?sid=g9b&collection-tab-name=dove&sort=price_asc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=EWIDON4DSQVR_AD
              - img "Image" [ref=e1199]
            - link [ref=e1204]:
              - /url: /health-care/~cs-7yis4zys62/pr?sid=hlc&collection-tab-name=ON&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=R90C69O4II8Y_AD
              - img "Image" [ref=e1207]
            - link [ref=e1212]:
              - /url: /beauty-and-grooming/~cs-31txn3c6n2/pr?sid=g9b&collection-tab-name=Kajal&param=62895&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=AJPPMXZZFR1C_AD
              - img "Image" [ref=e1215]
            - link [ref=e1220]:
              - /url: /health-care/~cs-bdyl9hz95s/pr?sid=hlc&collection-tab-name=Nutrigrow&sort=recency_desc&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BQ2E6YTCR92R_AD
              - img "Image" [ref=e1223]
            - link [ref=e1228]:
              - /url: /kyh/~cs-wvokhtqax9/pr?sid=kyh&collection-tab-name=Little+Angel+&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=1UUR8N9BM8G7_AD
              - img "Image" [ref=e1231]
            - link [ref=e1236]:
              - /url: /kapiva-gym-foods-kesar-shilajit-gold-resin-25g/p/itm4eccb9ceff809?pid=AYDH2XWZ8TU9SUWR&lid&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BVAIPIIHZXKQ_AD
              - img "Image" [ref=e1239]
            - link [ref=e1244]:
              - /url: /chimney/~cs-y86esh4o3v/pr?sid=j9e%2Cm38%2Ctgz&collection-tab-name=BEYOND+-+CHIMNEY&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=BJ85P7ZFCUJ6_AD
              - img "Image" [ref=e1247]
            - link [ref=e1252]:
              - /url: /health-care/~cs-uhp85a4hi1/pr?sid=hlc&collection-tab-name=Horlicks+Diabetes&ctx=eyJjYXJkQ29udGV4dCI6eyJhdHRyaWJ1dGVzIjp7InNvdXJjZUNvbnRlbnRUeXBlIjp7InNpbmdsZVZhbHVlQXR0cmlidXRlIjp7ImtleSI6InNvdXJjZUNvbnRlbnRUeXBlIiwiaW5mZXJlbmNlVHlwZSI6IlNDVCIsInZhbHVlIjoiQUQiLCJ2YWx1ZVR5cGUiOiJTSU5HTEVfVkFMVUVEIn19fX19&nnc=C5CO9U9LC79V_AD
              - img "Image" [ref=e1255]
          - button [ref=e1256]
      - generic [ref=e1260]: Hang on, loading content
      - generic [ref=e1274]:
        - generic [ref=e1275]: Flipkart - Your go-to place for Online Shopping
        - generic [ref=e1276]: +
      - contentinfo [ref=e1277]:
        - generic [ref=e1279]:
          - generic [ref=e1280]:
            - generic [ref=e1281]:
              - generic [ref=e1282]: ABOUT
              - link "Contact Us" [ref=e1283]:
                - /url: /helpcentre?otracker=footer_navlinks
              - link "About Us" [ref=e1284]:
                - /url: https://corporate.flipkart.net/corporate-home
              - link "Careers" [ref=e1285]:
                - /url: https://www.flipkartcareers.com/?otracker=footer_navlinks
              - link "Flipkart Stories" [ref=e1286]:
                - /url: http://stories.flipkart.com/?otracker=footer_navlinks
              - link "Press" [ref=e1287]:
                - /url: http://stories.flipkart.com/category/top-stories/news/
              - link "Corporate Information" [ref=e1288]:
                - /url: /corporate-information
            - generic [ref=e1289]:
              - generic [ref=e1290]: GROUP COMPANIES
              - link "Myntra" [ref=e1291]:
                - /url: https://www.myntra.com/
              - link "Cleartrip" [ref=e1292]:
                - /url: https://www.cleartrip.com/
              - link "Shopsy" [ref=e1293]:
                - /url: https://www.shopsy.in
            - generic [ref=e1294]:
              - generic [ref=e1295]: HELP
              - link "Payments" [ref=e1296]:
                - /url: /pages/payments
              - link "Shipping" [ref=e1297]:
                - /url: /pages/shipping
              - link "Cancellation & Returns" [ref=e1298]:
                - /url: /helpcentre?catalog=55c9c6edb000002e002c1701&view=CATALOG
              - link "FAQ" [ref=e1299]:
                - /url: /helpcentre?catalog=55c9c8e2b0000023002c1702&view=CATALOG
            - generic [ref=e1300]:
              - generic [ref=e1301]: CONSUMER POLICY
              - link "Cancellation & Returns" [ref=e1302]:
                - /url: /pages/returnpolicy?otracker=footer_navlinks
              - link "Terms Of Use" [ref=e1303]:
                - /url: /pages/terms?otracker=footer_navlinks
              - link "Security" [ref=e1304]:
                - /url: /pages/paymentsecurity?otracker=footer_navlinks
              - link "Privacy" [ref=e1305]:
                - /url: /pages/privacypolicy?otracker=footer_navlinks
              - link "Sitemap" [ref=e1306]:
                - /url: /sitemap?otracker=footer_navlinks
              - link "Grievance Redressal" [ref=e1307]:
                - /url: /pages/grievance-redressal-mechanism?otracker=footer_navlinks
              - link "EPR Compliance" [ref=e1308]:
                - /url: /pages/ewaste-compliance-tnc?otracker=footer_navlinks
              - link "FSSAI Food Safety Connect App" [ref=e1309]:
                - /url: https://fssai.gov.in/cms/food-safety-connect.php
            - generic [ref=e1310]:
              - generic [ref=e1311]: "Mail Us:"
              - generic [ref=e1312]:
                - paragraph [ref=e1313]: Flipkart Internet Private Limited,
                - paragraph [ref=e1314]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1315]: Clove Embassy Tech Village,
                - paragraph [ref=e1316]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1317]: Bengaluru, 560103,
                - paragraph [ref=e1318]: Karnataka, India
              - generic [ref=e1319]: "Social:"
              - generic [ref=e1320]:
                - link "Facebook" [ref=e1322]:
                  - /url: https://www.facebook.com/flipkart
                  - img "Facebook" [ref=e1323]
                - link "Twitter" [ref=e1325]:
                  - /url: https://www.twitter.com/flipkart
                  - img "Twitter" [ref=e1326]
                - link "YouTube" [ref=e1328]:
                  - /url: https://www.youtube.com/flipkart
                  - img "YouTube" [ref=e1329]
                - link "Instagram" [ref=e1331]:
                  - /url: https://www.instagram.com/flipkart
                  - img "Instagram" [ref=e1332]
            - generic [ref=e1333]:
              - generic [ref=e1334]: "Registered Office Address:"
              - generic [ref=e1335]:
                - paragraph [ref=e1336]: Flipkart Internet Private Limited,
                - paragraph [ref=e1337]: Buildings Alyssa, Begonia &
                - paragraph [ref=e1338]: Clove Embassy Tech Village,
                - paragraph [ref=e1339]: Outer Ring Road, Devarabeesanahalli Village,
                - paragraph [ref=e1340]: Bengaluru, 560103,
                - paragraph [ref=e1341]: Karnataka, India
                - paragraph [ref=e1342]: "CIN : U51109KA2012PTC066107"
                - paragraph
                - paragraph [ref=e1343]:
                  - text: "Telephone:"
                  - link "044-45614700" [ref=e1344]:
                    - /url: tel:044-45614700
                  - text: /
                  - link "044-67415800" [ref=e1345]:
                    - /url: tel:044-67415800
          - generic [ref=e1346]:
            - generic [ref=e1347]:
              - img "Become a Seller" [ref=e1348]
              - link "Become a Seller" [ref=e1349]:
                - /url: https://seller.flipkart.com/?utm_source=fkwebsite&utm_medium=websitedirect
            - generic [ref=e1350]:
              - img "Advertise" [ref=e1351]
              - generic "Advertise" [ref=e1352]
            - generic [ref=e1353]:
              - img "Gift Cards" [ref=e1354]
              - link "Gift Cards" [ref=e1355]:
                - /url: /the-gift-card-store?otracker=footer_navlinks
            - generic [ref=e1356]:
              - img "Help Center" [ref=e1357]
              - link "Help Center" [ref=e1358]:
                - /url: /helpcentre?otracker=footer_navlinks
            - generic [ref=e1359]: © 2007-2026 Flipkart.com
            - img "Payment methods"
  - contentinfo
```

# Test source

```ts
  1  | // @ts-check
  2  | import { test, expect } from '@playwright/test';
  3  | 
  4  | test('has title', async ({ page }) => {
  5  |   await page.goto('https://playwright.dev/');
  6  | 
  7  |   // Expect a title "to contain" a substring.
  8  |   await expect(page).toHaveTitle(/Playwright/);
  9  | });
  10 | 
  11 | test('get started link', async ({ page }) => {
  12 |   await page.goto('https://playwright.dev/');
  13 | 
  14 |   // Click the get started link.
  15 |   await page.getByRole('link', { name: 'Get started' }).click();
  16 | 
  17 |   // Expects page to have a heading with the name of Installation.
  18 |   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  19 | });
  20 | 
  21 | 
  22 | test('Launching amazon website', async ({page})=>{
  23 | 
  24 |   await page.goto('https://www.amazon.in/')
  25 | })
  26 | 
  27 | 
  28 | test('Flipkart Test',async({page})=>{
  29 | 
> 30 |   await page.goto('https://www.flipkart.com/')
     |              ^ Error: page.goto: Test timeout of 30000ms exceeded.
  31 | 
  32 | })
  33 | 
```