import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Product {
  image: string;
  name: string;
  description: string;
  rating: number;
  link: string;
}

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})


export class ProductsComponent {

  

  products: Product[] = [
    {
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTr3TQyG0AdnsItAvYU1BH36qV1MEnTb5NSP0R_bW64614IxcLxHZqqIsTA7b9ku8NgnuXrxIH59MR4RA_oSEiiJRpYoRxwfKPUoDsc86pAUIAPWZQNtkoTX7wi6TaMRcBt8FiQQns&usqp=CAc',
      name: 'iPhone 15',
      description: 'Новейший iPhone с улучшенной камерой и A17 Bionic',
      rating: 4.8,
      link: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjI7pKHm8WLAxXnRpEFHcFJKcoYABAVGgJscg&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfobqtLV-uwWs0GFSFVAXHHWo95muXghpca4WpWQohpUVyHQYn7tQ4BoCDQcQAvD_BwE&ohost=www.google.com&cid=CAESV-D2fRZ8lz3luNVURJKMhZRcJxCJru1KS5b3Aqs50BGuyw5W2LBevvnXXOz764W1KNqHSJUtG5Xtp-esQIfRLjgc_S7Yym8D20o6GuTQUjDN5K420y_GgA&sig=AOD64_1xmgUWVvm4TeHK5qgb7CRWTah1Uw&ctype=5&q=&ved=2ahUKEwjl3IyHm8WLAxWTHXcKHdyHIVkQ9aACKAB6BAgDECE&adurl=',
    },
    {
      image: 'data:image/webp;base64,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',
      name: 'Samsung Galaxy S23',
      description: 'Флагман от Samsung с AMOLED экраном',
      rating: 4.7,
      link: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjFtfSlm8WLAxWBWJEFHYq2L8MYABAcGgJscg&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfvNPCtpVjsDAQv8TRIxoFI8dhsIdgqR9tLHCRkPar9d7265vqNWYPxoCjsMQAvD_BwE&ohost=www.google.com&cid=CAESV-D2AHU4RFKYD-jk-VaJhPETHuefT3OjNSYbCrFLZSxR4ZWuZmSnp9pAhL6z4C7DCvnTnQ6B8d7IRZbKol7lI9NSceRI3-vZGNv3UI2Hz0VCnEJhCRyZMg&sig=AOD64_3ddo4QIAhBeDaV61evM3QCeGZjUQ&ctype=5&q=&ved=2ahUKEwjF6uulm8WLAxVPHRAIHZITOG8Q9aACKAB6BAgEEBA&adurl=',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRKRjXVTAEyUtHpgIh03fseeSTpdCPejCiWB1-QKZ5aSxf23LQqDQQs85Zkk-6ONVDF-1jMWf61a1CMmrB4T_YjIq2MkE3sMlFuZiKpTn-ij7UdfAY4dCHe2glZ6LVatiYM8Dk-yFbGO8c&usqp=CAc',
      name: 'Xiaomi Redmi Note 12',
      description: 'Смартфон с отличным соотношением цены и качества',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/xiaomi-redmi-note-12-pro-5g-8-gb-256-gb-sinii-podarok-109744675/?c=750000000',
    },
    {
      image: 'data:image/jpeg;base64,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',
      name: 'Google Pixel 7',
      description: 'Чистый Android с мощной камерой и AI-функциями',
      rating: 4.9,
      link: 'https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjZg_K3m8WLAxXgGKIDHaA8KcwYABAFGgJsZQ&ae=2&aspm=1&co=1&ase=5&gclid=CjwKCAiAk8G9BhA0EiwAOQxmfkHCOEPJ_WnZsTTjijXUqW_DWujKF0QZkTbRMBjh130Lu-7GrcTObBoCQvcQAvD_BwE&ohost=www.google.com&cid=CAESV-D2-iQTh48EpptsF_TS3ZiNetzJWzDwWonijjbSveCMa56lcTMA-riqxjwQD_CVv0Wr9tn85qwK6Ggko2k8U9vkmOREcFomd4FjWvWpLXwPgYelT7Kfjg&sig=AOD64_1_zEXqlLneG_ZtpNq7_lojeOgztA&ctype=5&q=&ved=2ahUKEwiZvuq3m8WLAxVk-IsKHYHdDr8Q9aACKAB6BAgFEBo&adurl=',
    },
    {
      image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRUkzzmZrErexr-45RTaUtXUNHZTIGWHgudT6J69-2nFTPCRige2bBp6Ty3DCl5eZes6NjvCDvmAhW1TpkcQtsd3myWX1tq1bsitvyDIm6zdaxsQl1IKy6NK4jiUH0CPhp-LGWcvIXZpg&usqp=CAc',
      name: 'OnePlus 11',
      description: 'Флагман с высокой производительностью и OxygenOS',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/oneplus-11-16-gb-256-gb-chernyi-109309822/?srsltid=AfmBOopOZNfi0frEuXk90WlNkBUpWxuuw8xjntcugRwRGDwsWRE5ZSWk',
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTMaaerTXaDJstt1Mokt0nCiqNiEAgyGGWDtsy0hAs1DzKFwr9R8gId-sJJHAE-hQBJHnyBJyD0TYsyTOV6o9_B0CNYfp8QnrjiJxKnVJ4FB_SP9dkjK3oYJobf-OSGa_mmKxWUFw&usqp=CAc',
      name: 'Huawei P60 Pro',
      description: 'Смартфон с лучшей камерой от Leica',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/huawei-p60-pro-8-gb-256-gb-chernyi-podarok-110440086/?srsltid=AfmBOopoS8hqRcNriw3BbYXltLJw34C6712gMsyqfJssB8Z0I_Z69dgE',
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSlN9hqdCG1l_0mkHustiADHeI1lXyeVCOs4boqt1CkrK1B2ZjUk09BeVw4UWxYrLGEC_oAWIbOVkM31g1DETD1dNsDM-ctskdx-iTGRgiqpCOGBRwASAajMOYM89Cf3WUesPbwSScZ8w&usqp=CAc',
      name: 'Sony Xperia 1 V',
      description: 'Флагман от Sony с уникальным 4K дисплеем',
      rating: 4.6,
      link: 'https://kaspi.kz/shop/p/sony-xperia-1-v-5g-12-gb-256-gb-chernyi-112147794/?srsltid=AfmBOoookdwjNX6wKXcvwjM-wVDXUzrFJ0yr0EDoHdPNK0KZlHhQ8llL',
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSIfKHgwMrKgP-XlP_hR3E9BjGOF9ObY_mDtQm83oJyQSe2euufaZXvE2c7s6zuYLMlXtY1uymiiLBZ0ePGV5-rSEesysakciONmvbQWAIEfChE39FuR9wMWZJXrinR9HIqTu_7-Brtyw&usqp=CAc',
      name: 'Asus ROG Phone 7',
      description: 'Игровой смартфон с высокой частотой обновления',
      rating: 4.9,
      link: 'https://kaspi.kz/shop/p/asus-rog-phone-7-8-gb-256-gb-chernyi-110082491/?srsltid=AfmBOorY4oRWi4pZjoKgTIWxD8gJioaPeeGA7k7_iZuD2p52QTzK9-yG',
    },
    {
      image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRCLOSDXmcuH9LNgMKzarAjibMqBSoowL6yYHxxK6GAS0tA-GrgCvLmzmWtZ8oOaUH1jpTaJRcu4aTGJezxjmz-2LW4agDzmMCz-gukbNZ4TeGdLXhO0_xs5rbjMiMoI0BfoDzpf8PqJRI&usqp=CAc',
      name: 'Motorola Edge 40',
      description: 'Элегантный смартфон с изогнутым дисплеем',
      rating: 4.7,
      link: 'https://kaspi.kz/shop/p/motorola-edge-40-8-gb-256-gb-chernyi-114166781/?srsltid=AfmBOopB2VN2-oKR9HaP4kdx1AiWxKjXS1KsbZBopGhtMavwGLEK_uZt',
    },
    {
      image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSpXleanVLBUWBe2QkvGn5tPy6Vw2tg5kGb8gig-0oIrN6K9IclyDbWQhekrzvS7DY7y0Pg8-eX3RGY0q2-WOO5cuSVZeEc2fRFNXwSiPZ2OXIYb_PJCNJOuLwPNDvEq13m7_eMrnM&usqp=CAc',
      name: 'Realme GT Neo 5',
      description: 'Бюджетный флагман с мощной начинкой',
      rating: 4.8,
      link: 'https://kaspi.kz/shop/p/realme-gt-neo-5-16-gb-256-gb-belyi-113457202/?srsltid=AfmBOopyt181zFvOV1L3QJ2GmMpqdSUvVIApcMsPtQgjLwUF-03PsAJm',
    }
  ];

  share(product: Product) {
    const message = `Смотри, какой классный товар: ${product.name} - ${product.link}`;
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
    
    window.open(whatsappUrl, '_blank');
  }
  constructor(private router: Router) {}
  goHome() {
    this.router.navigate(['/']);
  }
  
  
}
