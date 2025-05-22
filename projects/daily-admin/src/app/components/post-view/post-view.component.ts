import { Component, signal, computed, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule, DatePipe } from '@angular/common';
import { IPost } from '../../model/post.model';
import { PostService } from '../../../services/post.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-post-view',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss'],
})
export class PostViewComponent implements OnInit {
  private actRoute = inject(ActivatedRoute);
  private router = inject(Router);
  private datePipe = inject(DatePipe);
  private postService = inject(PostService);
  private sanitizer = inject(DomSanitizer);

  article = signal<IPost>({
    id: 0,
    title: { PT: '', EN: '', ES: '' },
    excerpt: { PT: '', EN: '', ES: '' },
    content: { PT: '', EN: '', ES: '' },
    image: '',
    author: '',
    tags: [],
    category: '',
    metaDescription: { PT: '', EN: '', ES: '' },
    affiliateLinks: { PT: '', EN: '', ES: '' },
    status: 'PENDING',
    date: '',
    readTime: '',
    updated_at: '',
  });

  currentLang = signal<'PT' | 'EN' | 'ES'>('PT');

  safeContent = computed<SafeHtml>(() =>
    this.sanitizer.bypassSecurityTrustHtml(this.article().content[this.currentLang()]),
  );

  ngOnInit() {
    this.article.set(mockPosts);
    // Se for buscar por ID da API, manter a lógica comentada aqui
  }

  setLanguage(lang: 'PT' | 'EN' | 'ES') {
    this.currentLang.set(lang);
  }
}

const mockPosts: IPost = {
  id: 1,
  title: {
    EN: "iPhone 17: Rumors and Expectations for Apple's Future",
    PT: 'iPhone 17: Rumores e Expectativas para o Futuro da Apple',
    ES: 'iPhone 17: Rumores y Expectativas para el Futuro de Apple',
  },
  excerpt: {
    EN: "Discover what tech enthusiasts expect from Apple's next big release, the iPhone 17, with innovations in design, camera, and artificial intelligence.",
    PT: 'Descubra o que os entusiastas da tecnologia esperam do próximo grande lançamento da Apple, o iPhone 17, com inovações em design, câmera e inteligência artificial.',
    ES: 'Descubre lo que los entusiastas de la tecnología esperan del próximo gran lanzamiento de Apple, el iPhone 17, con innovaciones en diseño, cámara e inteligencia artificial.',
  },
  content: {
    EN: "<h2>iPhone 17: What's Next for Apple?</h2><p>The launch of a new iPhone is always a highlight in the tech world...</p>",
    PT: '<h2>iPhone 17: Rumores e Expectativas para o Futuro da Apple</h2><p>O lançamento de um novo iPhone é sempre um dos momentos mais aguardados no mundo da tecnologia, e o iPhone 17 não é exceção. Com rumores circulando entre os entusiastas, a Apple promete inovações que podem redefinir o mercado de smartphones. Neste artigo, exploramos as expectativas para o iPhone 17, com base em vazamentos e tendências da indústria.</p><h3>Design Renovado</h3><p>Espera-se que o iPhone 17 traga um design ainda mais elegante, com bordas mais finas e possivelmente uma construção mais leve, utilizando materiais avançados como titânio reforçado. Rumores apontam para uma tela maior, com tecnologia ProMotion de 120 Hz em todos os modelos, garantindo animações mais fluidas e uma experiência visual imersiva.</p><h3>Câmeras de Última Geração</h3><p>A Apple deve continuar sua liderança em fotografia mobile com o iPhone 17. Há especulações sobre um sensor principal de 48 MP aprimorado, com melhor desempenho em baixa luz, e uma lente periscópio para zoom óptico de até 10x. Além disso, a integração de IA para edição de imagens em tempo real pode tornar as fotos ainda mais impressionantes.</p><h3>Inteligência Artificial no Centro</h3><p>A inteligência artificial será um dos grandes destaques do iPhone 17. A Apple está investindo pesado em recursos de IA, como assistentes virtuais mais inteligentes e personalizados, integração com o Apple Intelligence, e otimizações para tarefas do dia a dia, como reconhecimento de voz e automação de rotinas.</p><h3>Outros Rumores</h3><ul><li><strong>Chip A19:</strong> Um processador mais rápido e eficiente, fabricado em 3 nm.</li><li><strong>Conectividade 6G:</strong> Suporte inicial a redes 6G em algumas regiões.</li><li><strong>Bateria de Longa Duração:</strong> Melhorias na eficiência energética para uso prolongado.</li></ul><p>Embora a Apple mantenha segredo sobre os detalhes, o iPhone 17 promete ser um marco na história da empresa. Fique ligado no <a href="https://www.amazon.com/iphone-17-preorder">site oficial</a> para atualizações e pré-vendas!</p>',
    ES: '<h2>iPhone 17: ¿Qué Sigue para Apple?</h2><p>El lanzamiento de un nuevo iPhone es siempre uno de los momentos más esperados...</p>',
  },
  image:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKQy_pC2Vh7UJ-myf2JI9JyYK6kLmdSdIZPA&s',
  author: 'Equipe DailyBrief',
  tags: ['iPhone 17', 'Tecnologia', 'Apple', 'Smartphone', 'Rumores'],
  category: 'Tecnologia',
  metaDescription: {
    EN: 'Explore iPhone 17 rumors and expectations, including design, camera advancements, and AI innovations.',
    PT: 'Explore os rumores e expectativas sobre o iPhone 17, incluindo design, avanços em câmeras e inovações em IA.',
    ES: 'Explora los rumores y expectativas sobre el iPhone 17, incluyendo diseño, avances en cámaras e innovaciones en IA.',
  },
  affiliateLinks: {
    EN: 'https://www.amazon.com/iphone-17-preorder',
    PT: 'https://www.amazon.com/iphone-17-preorder',
    ES: 'https://www.apple.com/store/iphone-17',
  },
  status: 'PENDING',
  date: '2025-05-22T09:17:00-03:00',
  readTime: '1 min',
  updated_at: '2025-05-22T09:17:00-03:00',
};
