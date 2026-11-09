export type Aula = {
  id: string;
  titulo: string;
  resumo: string;
  corpo: string[];
  dica?: string;
};

export type Prompt = {
  id: string;
  titulo: string;
  quando: string;
  texto: string;
};

export type Caso = {
  titulo: string;
  antes: string;
  depois: string;
  ganho: string;
};

export type Questao = {
  pergunta: string;
  opcoes: string[];
  correta: number;
  explicacao: string;
};

export type Trilha = {
  slug: string;
  volume: string;
  nome: string;
  lombada: string;
  setor: string;
  couro: "oxblood" | "verde" | "marinho" | "castanho" | "grafite";
  descricao: string;
  publico: string;
  duracao: string;
  aulas: Aula[];
  prompts: Prompt[];
  casos: Caso[];
  cuidados: string[];
  exame: Questao[];
};

export const trilhas: Trilha[] = [
  {
    slug: "fundamentos",
    volume: "Vol. I",
    nome: "Fundamentos de IA no escritório",
    lombada: "Fundamentos",
    setor: "Todos os setores",
    couro: "grafite",
    descricao:
      "O ponto de partida para toda a equipe. Como a IA funciona na prática, como pedir bem e como usar sem colocar em risco o sigilo do cliente.",
    publico: "Toda a equipe, de todas as filiais",
    duracao: "40 min",
    aulas: [
      {
        id: "f1",
        titulo: "O que a IA faz bem, e o que ela não faz",
        resumo: "Entenda onde a IA economiza tempo de verdade e onde ela costuma errar.",
        corpo: [
          "A IA generativa é ótima com texto. Ela rascunha, resume, reorganiza, explica em linguagem simples, revisa e classifica informações. Em minutos, faz o que levaria uma tarde.",
          "Ela não é fonte de verdade. A IA escreve o que parece provável, não o que foi conferido. Por isso pode inventar um artigo de lei, um número de processo ou um julgado que nunca existiu. Esse erro tem nome: alucinação.",
          "Ela também não é boa calculadora e não sabe nada do caso além do que você contou. Se a informação não está no pedido, a IA vai supor.",
        ],
        dica: "Pense na IA como uma estagiária muito rápida e muito confiante. Ela entrega rápido, mas tudo passa pela sua revisão.",
      },
      {
        id: "f2",
        titulo: "O método CASO para escrever pedidos",
        resumo: "Quatro partes que transformam um pedido vago em uma resposta útil.",
        corpo: [
          "Contexto: quem você é, qual é a situação e para quem é o resultado. Ex.: \"Sou do comercial de um escritório previdenciário.\"",
          "Ação: o que você quer, com um verbo claro. Resumir, reescrever, listar, comparar, classificar.",
          "Saída: o formato do resultado. Tabela, lista, mensagem de WhatsApp de até 5 linhas, e-mail formal.",
          "Observações: regras e limites. \"Não prometa resultado\", \"use linguagem simples\", \"se faltar informação, pergunte antes\".",
          "Pedido fraco: \"Escreve uma mensagem para o cliente.\" Pedido CASO: \"Sou do comercial de um escritório previdenciário (C). Escreva uma mensagem de boas-vindas para um lead que pediu informação sobre aposentadoria (A). Formato WhatsApp, até 4 linhas, tom acolhedor (S). Não prometa resultado nem prazo (O).\"",
        ],
        dica: "Todo bom pedido é um CASO. Se a resposta veio ruim, quase sempre faltou uma das quatro letras.",
      },
      {
        id: "f3",
        titulo: "Converse com a IA, não peça só uma vez",
        resumo: "As melhores respostas vêm em duas ou três rodadas.",
        corpo: [
          "Trate a primeira resposta como rascunho. Depois peça ajustes: \"reduza pela metade\", \"deixe mais formal\", \"explique melhor o item 3\".",
          "Quando o pedido é complexo, peça que a IA faça perguntas antes: \"Antes de responder, me pergunte o que faltar para fazer isso bem.\"",
          "Mostre exemplos. Colar um modelo que já funciona no escritório vale mais do que qualquer explicação.",
        ],
      },
      {
        id: "f4",
        titulo: "Sigilo e LGPD na prática",
        resumo: "O que pode e o que nunca deve ser colado em uma ferramenta de IA.",
        corpo: [
          "No previdenciário lidamos com laudos, CID e histórico de saúde. Pela LGPD, dado de saúde é dado pessoal sensível (art. 5º, II) e exige cuidado redobrado.",
          "Antes de colar um texto, troque os dados que identificam a pessoa por marcadores: nome vira [CLIENTE], CPF vira [CPF], número do benefício vira [NB], endereço vira [ENDEREÇO].",
          "Use somente as contas de IA corporativas do escritório. Contas pessoais e ferramentas gratuitas podem guardar o que você digita.",
          "Nunca cole senhas, como as do gov.br ou do Meu INSS, nem dados bancários completos.",
        ],
        dica: "Regra rápida: se você não mandaria aquele texto para um desconhecido, anonimize antes de colar.",
      },
      {
        id: "f5",
        titulo: "Revisão humana e ética profissional",
        resumo: "Quem assina responde. A IA ajuda, mas a responsabilidade é do escritório.",
        corpo: [
          "Em novembro de 2024, o Conselho Federal da OAB aprovou recomendações para o uso de IA generativa na advocacia. Os eixos são: respeito à legislação, sigilo e privacidade do cliente, prática ética e transparência sobre o uso da ferramenta.",
          "Na prática: todo texto gerado por IA é revisado por uma pessoa antes de sair do escritório. Peças e citações são conferidas pelo advogado responsável.",
          "Jurisprudência e artigos de lei só valem depois de conferidos na fonte oficial, como o site do tribunal ou o Planalto.",
        ],
      },
    ],
    prompts: [
      {
        id: "fp1",
        titulo: "Modelo em branco do método CASO",
        quando: "Sempre que for pedir algo novo para a IA.",
        texto:
          "Contexto: Trabalho no setor [SETOR] de um escritório de advocacia previdenciária. [DESCREVA A SITUAÇÃO].\n\nAção: [O QUE VOCÊ QUER: resumir, escrever, listar, comparar...].\n\nSaída: Entregue em [FORMATO: tabela, lista, e-mail, mensagem de até X linhas].\n\nObservações: Use linguagem [simples/formal]. Não invente informações. Se faltar algo, me pergunte antes de responder.",
      },
      {
        id: "fp2",
        titulo: "Peça para a IA te entrevistar",
        quando: "Quando a tarefa é grande e você não sabe por onde começar.",
        texto:
          "Quero sua ajuda para [TAREFA]. Antes de começar, me faça até 5 perguntas, uma de cada vez, para entender o que você precisa saber. Só depois de eu responder todas, monte a proposta.",
      },
      {
        id: "fp3",
        titulo: "Revisar um texto seu",
        quando: "Antes de enviar um e-mail, comunicado ou mensagem importante.",
        texto:
          "Revise o texto abaixo. Corrija gramática e pontuação, deixe as frases mais claras e mantenha o meu tom. Não acrescente informações novas. Depois, liste em tópicos o que você mudou e por quê.\n\nTexto:\n[COLE AQUI]",
      },
      {
        id: "fp4",
        titulo: "Explicar em linguagem simples",
        quando: "Para transformar um texto técnico em algo que o cliente entenda.",
        texto:
          "Explique o texto abaixo para uma pessoa de [IDADE] anos, sem formação jurídica, que vai ler pelo celular. Use frases curtas, evite termos técnicos e, quando precisar usar um, explique entre parênteses. Máximo de 8 linhas.\n\nTexto:\n[COLE AQUI, SEM DADOS PESSOAIS]",
      },
    ],
    casos: [
      {
        titulo: "O e-mail de 3 páginas",
        antes: "Um e-mail longo de um parceiro com várias decisões no meio do texto. Leitura e anotações tomavam 20 minutos.",
        depois: "Com o pedido \"resuma em 5 tópicos e liste as decisões e prazos\", o resumo sai em 1 minuto e a pessoa só confere.",
        ganho: "Cerca de 15 minutos por e-mail longo",
      },
      {
        titulo: "O pedido vago que virou CASO",
        antes: "\"Faz um comunicado sobre o feriado\" gerou um texto genérico e formal demais.",
        depois: "Com contexto (12 filiais), ação, saída (WhatsApp, 4 linhas) e observações (horário de plantão), o texto saiu pronto na primeira tentativa.",
        ganho: "Menos idas e vindas com a IA",
      },
    ],
    cuidados: [
      "Nunca cole nome, CPF, NB, endereço ou dados de saúde sem anonimizar.",
      "Use apenas as contas de IA corporativas do escritório.",
      "Toda resposta da IA é rascunho até ser revisada por uma pessoa.",
      "Leis, julgados e números citados pela IA são conferidos na fonte oficial.",
      "Na dúvida sobre o que pode ser compartilhado, pergunte ao seu gestor antes.",
    ],
    exame: [
      {
        pergunta: "A IA citou um julgado que parece perfeito para o caso. O que fazer?",
        opcoes: ["Usar direto, a IA é confiável", "Conferir o julgado no site oficial do tribunal antes de usar", "Pedir para a IA confirmar se é verdadeiro"],
        correta: 1,
        explicacao: "A IA pode inventar julgados e até \"confirmar\" o que inventou. Só a fonte oficial garante que existe.",
      },
      {
        pergunta: "Qual é a ordem do método CASO?",
        opcoes: ["Contexto, Ação, Saída, Observações", "Cliente, Assunto, Sigilo, Objetivo", "Conteúdo, Análise, Síntese, Opinião"],
        correta: 0,
        explicacao: "Contexto, Ação, Saída e Observações. As quatro partes de um bom pedido.",
      },
      {
        pergunta: "Você precisa resumir um laudo médico com a IA. O que vem primeiro?",
        opcoes: ["Colar o laudo inteiro como está", "Trocar nome, CPF e outros dados por marcadores", "Usar a conta pessoal para não misturar"],
        correta: 1,
        explicacao: "Dados de saúde são sensíveis pela LGPD. Anonimize e use a conta corporativa.",
      },
    ],
  },

  {
    slug: "comercial",
    volume: "Vol. II",
    nome: "IA no Comercial",
    lombada: "Comercial",
    setor: "Setor Comercial",
    couro: "oxblood",
    descricao:
      "Do lead que chega pelo WhatsApp até o contrato assinado. Triagem previdenciária, mensagens que convertem sem prometer resultado e uma ficha pronta para o jurídico.",
    publico: "Equipe comercial e atendimento das filiais",
    duracao: "50 min",
    aulas: [
      {
        id: "c1",
        titulo: "A IA em cada etapa do funil",
        resumo: "Lead, triagem, consulta, contrato, documentos e protocolo.",
        corpo: [
          "O caminho do cliente no escritório tem etapas claras: o lead chega pelo WhatsApp ou pelo site, passa pela triagem, agenda a consulta, assina o contrato, envia os documentos e o caso é protocolado.",
          "Em cada etapa existe um texto a ser escrito ou uma informação a ser organizada. É aí que a IA ajuda: primeira resposta, perguntas de triagem, lista de documentos, follow-up e resumo para o advogado.",
          "Com mais de 12 filiais recebendo leads, padronizar essas mensagens também garante que todo cliente receba o mesmo cuidado.",
        ],
      },
      {
        id: "c2",
        titulo: "Triagem previdenciária com IA",
        resumo: "As perguntas certas para entender o caso logo no primeiro contato.",
        corpo: [
          "Aposentadoria: idade, tempo de contribuição, se trabalhou em atividade insalubre ou perigosa e se já fez algum pedido no INSS.",
          "Benefício por incapacidade: qual é a doença ou lesão, desde quando está afastado, se tem laudos e se estava contribuindo quando adoeceu.",
          "BPC/LOAS: se a pessoa tem 65 anos ou mais, ou alguma deficiência, quantas pessoas moram na casa, a renda da família e se está no CadÚnico.",
          "Pensão por morte: data do óbito, quem são os dependentes e se o falecido contribuía ou era aposentado.",
          "A IA ajuda a montar e adaptar essas perguntas, e a organizar as respostas do cliente. Quem decide se existe direito é sempre o advogado.",
        ],
        dica: "Peça para a IA transformar as perguntas em mensagens curtas, uma por vez. No WhatsApp, cliente responde melhor a uma pergunta do que a um questionário.",
      },
      {
        id: "c3",
        titulo: "Mensagens que convertem sem prometer",
        resumo: "Tom acolhedor, linguagem simples e respeito às regras da OAB.",
        corpo: [
          "Quem procura um advogado previdenciário muitas vezes está doente, sem renda ou já recebeu um \"não\" do INSS. A mensagem precisa acolher antes de explicar.",
          "Evite juridiquês. \"Requerimento administrativo\" vira \"pedido no INSS\". \"Indeferimento\" vira \"o INSS negou\".",
          "Nunca prometa resultado, valor ou prazo. O Provimento 205/2021 da OAB trata da publicidade na advocacia e veda a captação de clientela com promessas e apelo mercantil.",
        ],
        dica: "Inclua sempre na observação do pedido: \"não prometa resultado, valor ou prazo\".",
      },
      {
        id: "c4",
        titulo: "Respondendo às objeções mais comuns",
        resumo: "\"O INSS já negou\", \"quanto custa?\", \"vou pensar\".",
        corpo: [
          "Liste as objeções que mais aparecem na sua filial e peça para a IA sugerir respostas curtas, honestas e acolhedoras.",
          "\"O INSS já negou\": explique que a negativa não é o fim e que existe recurso e via judicial, sem garantir resultado.",
          "\"Quanto custa?\": explique como funciona a cobrança do escritório de forma transparente, conforme a orientação do advogado responsável.",
          "Revise as respostas com o advogado da filial e salve as aprovadas como modelo da equipe.",
        ],
      },
      {
        id: "c5",
        titulo: "Do atendimento para o jurídico",
        resumo: "Uma ficha do lead que evita retrabalho.",
        corpo: [
          "Depois da triagem, peça para a IA organizar a conversa em uma ficha: tipo de benefício provável, fatos principais, documentos já enviados, documentos faltantes e dúvidas para o advogado.",
          "Com a ficha, o advogado não precisa reler 80 mensagens de WhatsApp. A consulta começa do ponto certo.",
          "Anonimize a conversa antes de colar e preencha os dados reais só no sistema do escritório.",
        ],
      },
    ],
    prompts: [
      {
        id: "cp1",
        titulo: "Primeira resposta no WhatsApp",
        quando: "Quando um lead novo manda a primeira mensagem.",
        texto:
          "Sou do comercial de um escritório de advocacia previdenciária. Um lead mandou esta mensagem: \"[MENSAGEM DO LEAD]\".\n\nEscreva uma primeira resposta para WhatsApp com no máximo 4 linhas. Seja acolhedor, apresente o escritório em uma frase e termine com UMA pergunta simples para entender o caso.\n\nNão prometa resultado, valor ou prazo. Não use termos jurídicos.",
      },
      {
        id: "cp2",
        titulo: "Perguntas de triagem por benefício",
        quando: "Para saber o que perguntar a partir do que o cliente contou.",
        texto:
          "Um possível cliente contou o seguinte: \"[RESUMO SEM DADOS PESSOAIS]\".\n\nIdentifique qual tipo de benefício previdenciário pode estar envolvido (aposentadoria, incapacidade, BPC/LOAS, pensão por morte ou outro) e liste até 6 perguntas de triagem para confirmar.\n\nEscreva cada pergunta como uma mensagem curta de WhatsApp, em linguagem simples. Não faça análise de direito, apenas a triagem.",
      },
      {
        id: "cp3",
        titulo: "Lista de documentos para o cliente",
        quando: "Depois da triagem, para pedir os documentos certos.",
        texto:
          "Monte uma lista de documentos que normalmente são pedidos em um caso de [TIPO DE BENEFÍCIO] em um escritório previdenciário.\n\nFormato: mensagem de WhatsApp em lista, com uma explicação curta de onde conseguir cada documento (ex.: CNIS pelo Meu INSS). Linguagem simples.\n\nObservação: termine dizendo que o advogado vai confirmar a lista na consulta.",
      },
      {
        id: "cp4",
        titulo: "Resposta para objeção",
        quando: "Quando o lead hesita ou traz uma objeção.",
        texto:
          "Um possível cliente respondeu: \"[OBJEÇÃO, ex.: o INSS já negou meu pedido, não adianta]\".\n\nSugira 2 respostas diferentes para WhatsApp, com até 4 linhas cada: uma mais acolhedora e outra mais objetiva. Seja honesto, não prometa resultado e convide para uma conversa com o advogado.",
      },
      {
        id: "cp5",
        titulo: "Sequência de follow-up",
        quando: "Para leads que pararam de responder.",
        texto:
          "Um lead interessado em [TIPO DE BENEFÍCIO] parou de responder há [X] dias.\n\nEscreva uma sequência de 3 mensagens de follow-up para WhatsApp, para enviar no dia 1, no dia 3 e no dia 7. Cada mensagem com até 3 linhas, tom gentil, sem pressão e sem promessas. A última deve encerrar o contato de forma educada, deixando a porta aberta.",
      },
      {
        id: "cp6",
        titulo: "Ficha do lead para o jurídico",
        quando: "Antes de passar o caso para o advogado.",
        texto:
          "Abaixo está a conversa de triagem com um possível cliente (dados pessoais já trocados por marcadores).\n\nOrganize em uma ficha com estes campos: tipo de benefício provável, resumo do caso em 3 linhas, fatos importantes com datas, documentos já enviados, documentos faltantes e dúvidas para o advogado.\n\nNão tire conclusões jurídicas. Se alguma informação não estiver na conversa, escreva \"não informado\".\n\nConversa:\n[COLE AQUI]",
      },
    ],
    casos: [
      {
        titulo: "O áudio de 6 minutos às 22h",
        antes: "O cliente mandou um áudio longo contando a história toda. Na manhã seguinte, a atendente ouvia, anotava e montava as perguntas: 25 minutos.",
        depois: "Com a transcrição anonimizada, a IA monta a ficha e as perguntas que faltam em 2 minutos. A atendente revisa e responde.",
        ganho: "Primeira resposta mais rápida e ficha pronta para o advogado",
      },
      {
        titulo: "40 leads parados no mês",
        antes: "Leads que pararam de responder ficavam esquecidos, porque escrever um follow-up para cada um tomava tempo.",
        depois: "A filial criou uma sequência padrão de 3 mensagens com a IA, aprovada pelo advogado, e aplica a todos.",
        ganho: "Leads recuperados sem esforço extra da equipe",
      },
      {
        titulo: "\"O INSS já negou\"",
        antes: "A resposta variava de atendente para atendente, às vezes prometendo demais.",
        depois: "Respostas modelo, honestas e acolhedoras, criadas com a IA e revisadas pelo jurídico, usadas por todas as filiais.",
        ganho: "Padrão de atendimento e segurança ética",
      },
    ],
    cuidados: [
      "Nunca prometa resultado, valor de benefício ou prazo, nem peça para a IA fazer isso.",
      "A triagem identifica o caminho. Quem analisa se existe direito é o advogado.",
      "Conversas e áudios são anonimizados antes de ir para a IA.",
      "Mensagens modelo são aprovadas pelo advogado responsável antes de virar padrão.",
      "Publicidade e captação seguem o Provimento 205/2021 da OAB.",
    ],
    exame: [
      {
        pergunta: "Um lead pergunta se vai conseguir a aposentadoria. A mensagem ideal:",
        opcoes: ["Garante que sim, para não perder o cliente", "Acolhe, explica que o advogado vai analisar e convida para a consulta", "Diz que depende e encerra a conversa"],
        correta: 1,
        explicacao: "Prometer resultado é vedado. Acolher e levar para a consulta é o caminho correto.",
      },
      {
        pergunta: "Para o BPC/LOAS, qual destas perguntas faz parte da triagem?",
        opcoes: ["Quantas pessoas moram na casa e qual é a renda da família", "Qual o salário do último emprego com carteira", "Se a pessoa já foi aposentada antes"],
        correta: 0,
        explicacao: "O BPC é assistencial e considera a renda da família e a inscrição no CadÚnico.",
      },
      {
        pergunta: "O que a ficha do lead para o jurídico NÃO deve ter?",
        opcoes: ["Documentos faltantes", "Dúvidas para o advogado", "Uma conclusão de que o cliente tem direito"],
        correta: 2,
        explicacao: "A ficha organiza fatos. A conclusão jurídica é do advogado.",
      },
    ],
  },

  {
    slug: "financeiro",
    volume: "Vol. III",
    nome: "IA no Financeiro",
    lombada: "Financeiro",
    setor: "Setor Financeiro",
    couro: "verde",
    descricao:
      "Extratos de três empresas, conciliação, relatório semanal e DRE do mês. Como usar a IA para organizar, explicar e escrever, sem errar nas contas.",
    publico: "Equipe financeira",
    duracao: "50 min",
    aulas: [
      {
        id: "fi1",
        titulo: "A regra de ouro: peça a fórmula, não só o resultado",
        resumo: "A IA escreve bem, mas pode errar uma soma.",
        corpo: [
          "Modelos de linguagem podem errar contas, principalmente com muitas linhas. No financeiro, isso não pode passar.",
          "Por isso, peça para a IA montar a fórmula do Excel, explicar o passo a passo ou classificar os lançamentos. Quem calcula é a planilha.",
          "Quando a ferramenta corporativa tiver análise de arquivos, peça que ela mostre como chegou ao número e confira o total com a planilha.",
        ],
        dica: "Sempre feche com uma conferência: o total classificado tem que bater com o total do extrato.",
      },
      {
        id: "fi2",
        titulo: "Organizando os extratos das 3 empresas",
        resumo: "Uma estrutura única para tudo que entra e sai.",
        corpo: [
          "Padronize as colunas de todos os extratos: Data, Descrição, Valor, Empresa e Categoria. Com o mesmo formato, juntar as três empresas vira um copiar e colar.",
          "Crie um plano de contas simples, por exemplo: Honorários contratuais, Honorários de êxito, Folha de pagamento, Aluguel e ocupação, Marketing e captação, Tecnologia, Impostos e Outros.",
          "Peça para a IA sugerir a categoria de cada lançamento pela descrição. Depois, transforme os padrões que se repetem em regras fixas na planilha.",
          "Antes de colar um extrato, remova agência, número da conta e nomes de pessoas físicas.",
        ],
      },
      {
        id: "fi3",
        titulo: "Conciliação sem sofrimento",
        resumo: "Cruzar o que entrou no banco com o que o sistema diz que deveria entrar.",
        corpo: [
          "A conciliação compara duas listas: o extrato do banco e o relatório de honorários do ADVBOX. O objetivo é achar o que está nas duas, o que falta em uma e o que está duplicado.",
          "A IA ajuda a montar as fórmulas certas, como PROCX (ou PROCV), SOMASES e CONT.SES, e a explicar como usar tabela dinâmica.",
          "Descreva para a IA as colunas das duas planilhas e o que você quer encontrar. Ela devolve a fórmula pronta e explica cada parte.",
        ],
      },
      {
        id: "fi4",
        titulo: "Relatório semanal e DRE do mês",
        resumo: "Números a planilha calcula. A explicação a IA ajuda a escrever.",
        corpo: [
          "Uma DRE simples de escritório: Receita bruta (honorários) menos impostos sobre a receita dá a receita líquida. Menos as despesas (pessoal, ocupação, captação, tecnologia, outras) dá o resultado do período.",
          "Com os números fechados, cole o resumo na IA e peça uma análise: o que subiu, o que caiu, o que chama atenção e o que vale perguntar aos sócios.",
          "Para o relatório semanal, crie um modelo fixo com a IA e use toda semana. O relatório passa a sair sempre no mesmo formato.",
        ],
        dica: "Peça comparação com o mês anterior e com a média dos últimos 3 meses. Variação sozinha não diz muito.",
      },
      {
        id: "fi5",
        titulo: "Indicadores e dashboards",
        resumo: "Quais números acompanhar e como mostrar.",
        corpo: [
          "Bons indicadores para o escritório: receita por empresa e por filial, receita por tipo de benefício, inadimplência, despesa de captação por contrato fechado e evolução do caixa.",
          "Peça para a IA sugerir quais gráficos usar para cada indicador e como montar o painel no Excel ou no Power BI.",
          "Comece com poucos indicadores. Um painel com 5 números que todo mundo entende vale mais que um com 30.",
        ],
      },
    ],
    prompts: [
      {
        id: "fip1",
        titulo: "Classificar lançamentos do extrato",
        quando: "No começo da semana, com o extrato novo.",
        texto:
          "Sou do financeiro de um escritório de advocacia. Abaixo estão lançamentos de extrato (sem dados de conta) no formato Data | Descrição | Valor.\n\nClassifique cada lançamento em uma destas categorias: Honorários contratuais, Honorários de êxito, Folha de pagamento, Aluguel e ocupação, Marketing e captação, Tecnologia, Impostos, Outros.\n\nDevolva uma tabela com as colunas Data | Descrição | Valor | Categoria | Confiança (alta/média/baixa). Marque como baixa quando não tiver certeza. Não some valores.\n\n[COLE OS LANÇAMENTOS]",
      },
      {
        id: "fip2",
        titulo: "Criar uma fórmula do Excel",
        quando: "Quando você sabe o que quer, mas não a fórmula.",
        texto:
          "Tenho uma planilha no Excel com as colunas: [LISTE AS COLUNAS E A LETRA DE CADA UMA].\n\nQuero [O QUE VOCÊ QUER, ex.: somar os honorários recebidos por empresa no mês de março].\n\nMe dê a fórmula pronta para colar, explique cada parte em linguagem simples e diga em qual célula colocar.",
      },
      {
        id: "fip3",
        titulo: "Montar a conciliação",
        quando: "Para cruzar o extrato com o relatório de honorários.",
        texto:
          "Preciso conciliar duas planilhas.\nPlanilha 1 (extrato): colunas [COLUNAS].\nPlanilha 2 (honorários do ADVBOX): colunas [COLUNAS].\n\nQuero identificar: (1) valores que estão nas duas, (2) valores do extrato sem correspondência no ADVBOX, (3) honorários do ADVBOX que não entraram no banco e (4) possíveis duplicidades.\n\nMonte o passo a passo com fórmulas do Excel (PROCX, SOMASES ou CONT.SES) e diga como marcar cada situação com uma coluna de status.",
      },
      {
        id: "fip4",
        titulo: "Relatório semanal para os sócios",
        quando: "Toda sexta-feira, com os números fechados.",
        texto:
          "Escreva o relatório financeiro semanal de um escritório de advocacia com base nos números abaixo, que já foram conferidos.\n\nFormato: título, resumo em 3 linhas, tabela com entradas, saídas e saldo por empresa, e até 3 pontos de atenção.\n\nTom objetivo, sem adjetivos. Não recalcule os números, use exatamente os informados.\n\n[COLE OS NÚMEROS]",
      },
      {
        id: "fip5",
        titulo: "Análise da DRE do mês",
        quando: "No fechamento mensal.",
        texto:
          "Abaixo está a DRE do mês de [MÊS] e a do mês anterior, já conferidas.\n\nAnalise como um controller experiente: o que mais variou, possíveis causas (como hipóteses, não como certeza) e 3 perguntas que valem levar para a reunião com os sócios.\n\nNão recalcule os totais.\n\n[COLE AS DUAS DRES]",
      },
      {
        id: "fip6",
        titulo: "Desenhar um dashboard",
        quando: "Para começar o painel financeiro.",
        texto:
          "Quero montar um painel financeiro para um escritório previdenciário com 3 empresas e mais de 12 filiais. Os dados que tenho são: [LISTE AS PLANILHAS E COLUNAS].\n\nSugira 5 indicadores principais, o tipo de gráfico ideal para cada um e o passo a passo para montar no [Excel/Power BI]. Comece pelo mais simples.",
      },
    ],
    casos: [
      {
        titulo: "Fechamento das 3 empresas",
        antes: "Três extratos em formatos diferentes, copiados à mão para o Excel e comparados linha a linha. O fechamento levava dias.",
        depois: "Colunas padronizadas, classificação sugerida pela IA e conciliação por fórmulas. A equipe só revisa o que ficou com confiança baixa.",
        ganho: "Fechamento em menos tempo e com menos erro manual",
      },
      {
        titulo: "Relatório semanal em 15 minutos",
        antes: "Toda sexta, o relatório era escrito do zero, cada semana de um jeito.",
        depois: "Modelo fixo criado com a IA. Os números vêm da planilha e a IA escreve o resumo e os pontos de atenção.",
        ganho: "Relatório padronizado e entregue no prazo",
      },
      {
        titulo: "O pagamento em duplicidade",
        antes: "Um honorário lançado duas vezes só apareceu na DRE do mês seguinte.",
        depois: "A coluna de status da conciliação passou a marcar duplicidades automaticamente toda semana.",
        ganho: "Erros encontrados na mesma semana",
      },
    ],
    cuidados: [
      "Nunca cole agência, número de conta, senhas ou dados de cartão.",
      "A IA não calcula totais oficiais. Quem calcula é a planilha.",
      "Todo número que vai para os sócios é conferido com o extrato original.",
      "Use o resultado da IA como hipótese de análise, não como conclusão.",
      "Mantenha uma cópia da planilha antes de aplicar fórmulas novas.",
    ],
    exame: [
      {
        pergunta: "Você precisa do total de honorários do mês. O mais seguro é:",
        opcoes: ["Pedir para a IA somar a lista", "Pedir para a IA montar a fórmula e calcular na planilha", "Estimar pela média dos meses anteriores"],
        correta: 1,
        explicacao: "A IA pode errar somas. A fórmula na planilha é verificável.",
      },
      {
        pergunta: "Antes de colar um extrato na IA, você deve:",
        opcoes: ["Remover agência, conta e nomes de pessoas físicas", "Converter tudo para PDF", "Nada, extrato não tem dado sensível"],
        correta: 0,
        explicacao: "Extrato tem dados bancários e pessoais. Anonimize sempre.",
      },
      {
        pergunta: "Na conciliação, o que a IA faz melhor?",
        opcoes: ["Garantir que não há erro no banco", "Montar as fórmulas e explicar o passo a passo", "Aprovar o fechamento do mês"],
        correta: 1,
        explicacao: "A IA ajuda a construir o método. A conferência e a aprovação são da equipe.",
      },
    ],
  },

  {
    slug: "juridico",
    volume: "Vol. IV",
    nome: "IA no Jurídico",
    lombada: "Jurídico",
    setor: "Setor Jurídico e ADM",
    couro: "marinho",
    descricao:
      "Leitura de processos, laudos e CNIS, rascunho de peças com os modelos da casa, quesitos para perícia e comunicação com o cliente. Sempre com o advogado no comando.",
    publico: "Advogados, estagiários e equipe ADM de petições",
    duracao: "60 min",
    aulas: [
      {
        id: "j1",
        titulo: "O advogado no comando",
        resumo: "A IA rascunha. O advogado decide, revisa e assina.",
        corpo: [
          "A IA acelera o trabalho de leitura e redação, mas não substitui o raciocínio jurídico nem a responsabilidade profissional.",
          "Já existem casos no Brasil de advogados multados por citar julgados que não existiam, gerados por IA. O risco é real e o responsável é quem assina.",
          "Regra da casa: nenhuma peça gerada com IA é protocolada sem revisão completa do advogado responsável.",
        ],
        dica: "Use a IA para chegar mais rápido a um bom rascunho. Use o seu tempo para o que só você faz: estratégia e revisão.",
      },
      {
        id: "j2",
        titulo: "Leitura de processos, laudos e CNIS",
        resumo: "Transforme 40 páginas em um resumo confiável.",
        corpo: [
          "Peça resumos estruturados: partes, pedido, fatos, provas, decisão e próximos passos. Sempre pedindo a página de onde cada informação saiu, para conferir rápido.",
          "No CNIS, a IA organiza os vínculos em tabela (empregador, início, fim, observações) e aponta lacunas, vínculos sem data de saída e períodos que podem precisar de prova.",
          "Tempo de contribuição e valores são calculados no software de cálculo do escritório. A IA organiza, não calcula.",
        ],
      },
      {
        id: "j3",
        titulo: "Peças com os modelos da casa",
        resumo: "Rascunho rápido que segue o padrão do escritório.",
        corpo: [
          "O melhor resultado vem quando você entrega à IA o modelo do escritório para aquele tipo de ação, junto com os fatos do caso já anonimizados.",
          "Peça para seguir a estrutura do modelo, adaptar os fatos e marcar com [CONFERIR] tudo que depende de verificação: datas, valores, documentos e fundamentos.",
          "Na revisão, confira com atenção os pedidos, o valor da causa e a competência. No JEF, por exemplo, o limite é de 60 salários mínimos.",
        ],
      },
      {
        id: "j4",
        titulo: "Pesquisa e jurisprudência",
        resumo: "A IA mapeia argumentos. A fonte oficial confirma.",
        corpo: [
          "Use a IA para mapear teses, organizar argumentos e encontrar pontos fracos da sua própria peça.",
          "Peça argumentos sem citações e faça a pesquisa de julgados nas ferramentas oficiais dos tribunais.",
          "Se a IA citar um julgado, trate como pista. Ele só entra na peça depois de localizado e lido na fonte.",
        ],
      },
      {
        id: "j5",
        titulo: "Perícia e conversa com o cliente",
        resumo: "Quesitos bem feitos e decisões explicadas em linguagem simples.",
        corpo: [
          "Para perícia médica, informe a doença, a atividade profissional do cliente e o que precisa ser comprovado. A IA sugere quesitos, e o advogado escolhe e ajusta.",
          "Sentenças e decisões podem ser explicadas ao cliente com a ajuda da IA: o que foi decidido, o que muda na vida dele e quais são os próximos passos.",
          "Antes de enviar ao cliente, revise o texto para não criar expectativa de resultado ou de prazo.",
        ],
      },
    ],
    prompts: [
      {
        id: "jp1",
        titulo: "Resumo estruturado de processo ou laudo",
        quando: "Ao receber um processo ou laudo longo.",
        texto:
          "Você é um assistente de um escritório de advocacia previdenciária. Resuma o documento abaixo (dados pessoais já trocados por marcadores) nesta estrutura:\n\n1. Tipo de documento e data\n2. Partes\n3. Fatos principais\n4. Conclusões ou decisão\n5. Pontos favoráveis e desfavoráveis ao cliente\n6. Próximos passos e prazos mencionados\n\nIndique a página de cada informação. Não invente nada que não esteja no texto.\n\n[COLE O DOCUMENTO]",
      },
      {
        id: "jp2",
        titulo: "Organizar o CNIS em tabela",
        quando: "Na análise inicial de um caso de aposentadoria.",
        texto:
          "Abaixo está o texto de um CNIS (sem dados pessoais). Organize todos os vínculos e contribuições em uma tabela com as colunas: Empregador ou tipo | Início | Fim | Observações.\n\nDepois, liste: (1) vínculos sem data de fim, (2) períodos sem nenhuma contribuição e (3) registros com indicadores ou pendências.\n\nNão calcule tempo de contribuição.\n\n[COLE O CNIS]",
      },
      {
        id: "jp3",
        titulo: "Rascunho de peça a partir do modelo da casa",
        quando: "Para iniciar uma petição com o padrão do escritório.",
        texto:
          "Vou te passar um MODELO do escritório e os FATOS de um caso (anonimizados). Escreva um rascunho de [TIPO DE PEÇA] seguindo exatamente a estrutura e o estilo do modelo, adaptando para os fatos.\n\nRegras: não acrescente jurisprudência nem artigos que não estejam no modelo. Marque com [CONFERIR] tudo que depende de verificação (datas, valores, documentos).\n\nMODELO:\n[COLE]\n\nFATOS:\n[COLE]",
      },
      {
        id: "jp4",
        titulo: "Quesitos para perícia médica",
        quando: "Antes do prazo de apresentação de quesitos.",
        texto:
          "Caso de benefício por incapacidade. Doença ou lesão: [DOENÇA]. Atividade profissional do segurado: [ATIVIDADE]. Precisamos demonstrar: [O QUE PRECISA SER PROVADO, ex.: incapacidade para a atividade habitual desde 2024].\n\nSugira 10 quesitos objetivos para o perito, do mais importante ao menos importante, com uma linha explicando o objetivo de cada um.",
      },
      {
        id: "jp5",
        titulo: "Revisar uma peça antes do protocolo",
        quando: "Como segunda leitura, depois da sua revisão.",
        texto:
          "Revise a peça abaixo como um advogado previdenciarista experiente. Aponte: (1) trechos confusos ou repetitivos, (2) incoerências entre fatos e pedidos, (3) pedidos que podem estar faltando e (4) erros de português.\n\nNão reescreva a peça inteira. Liste os pontos com o trecho original e uma sugestão.\n\n[COLE A PEÇA, SEM DADOS PESSOAIS]",
      },
      {
        id: "jp6",
        titulo: "Explicar uma decisão ao cliente",
        quando: "Quando sai uma decisão, sentença ou exigência.",
        texto:
          "Explique a decisão abaixo para o cliente de um escritório previdenciário, que tem [IDADE] anos e vai ler pelo WhatsApp.\n\nDiga, em até 8 linhas e sem termos técnicos: o que foi decidido, o que isso significa para ele e qual é o próximo passo do escritório. Não prometa prazos nem resultados futuros.\n\n[COLE A DECISÃO, SEM DADOS PESSOAIS]",
      },
    ],
    casos: [
      {
        titulo: "O CNIS com 23 vínculos",
        antes: "Organizar um CNIS longo em planilha, vínculo por vínculo, tomava quase uma hora.",
        depois: "A IA organiza a tabela e aponta lacunas em minutos. O advogado confere com o documento e leva os dados para o software de cálculo.",
        ganho: "Análise inicial do caso mais rápida",
      },
      {
        titulo: "O laudo de 30 páginas",
        antes: "Leitura completa para encontrar as conclusões do perito e os pontos para impugnar.",
        depois: "Resumo estruturado com a página de cada informação. O advogado vai direto aos trechos que importam.",
        ganho: "Mais tempo para a estratégia do caso",
      },
      {
        titulo: "A inicial de incapacidade",
        antes: "Petição montada do zero, copiando trechos de peças antigas.",
        depois: "Modelo da casa + fatos anonimizados geram um rascunho com marcações [CONFERIR]. O advogado revisa e finaliza.",
        ganho: "Rascunho pronto em uma fração do tempo",
      },
    ],
    cuidados: [
      "Nenhuma peça feita com IA é protocolada sem revisão completa do advogado.",
      "Julgados e artigos citados pela IA são localizados e lidos na fonte oficial.",
      "Cálculos de tempo e valores são feitos no software de cálculo, não na IA.",
      "Documentos são anonimizados antes de serem colados.",
      "Textos ao cliente não criam expectativa de resultado ou prazo.",
    ],
    exame: [
      {
        pergunta: "A IA sugeriu um julgado do STJ perfeito para a sua tese. O correto é:",
        opcoes: ["Citar, a IA tem acesso aos tribunais", "Localizar e ler o julgado na fonte oficial antes de citar", "Citar só a ementa, sem o número"],
        correta: 1,
        explicacao: "Há casos de advogados multados por julgados inventados por IA. Só a fonte oficial confirma.",
      },
      {
        pergunta: "Ao organizar um CNIS, a IA deve:",
        opcoes: ["Calcular o tempo de contribuição final", "Organizar os vínculos e apontar lacunas para conferência", "Decidir a melhor regra de transição"],
        correta: 1,
        explicacao: "A IA organiza. Cálculo e estratégia ficam com o software e o advogado.",
      },
      {
        pergunta: "Por que pedir marcações [CONFERIR] no rascunho da peça?",
        opcoes: ["Para a peça ficar mais longa", "Para indicar o que depende de verificação antes do protocolo", "Porque o tribunal exige"],
        correta: 1,
        explicacao: "As marcações guiam a revisão do advogado e evitam que um dado não conferido passe.",
      },
    ],
  },

  {
    slug: "controladoria",
    volume: "Vol. V",
    nome: "IA na Controladoria",
    lombada: "Controladoria",
    setor: "Setor de Controladoria",
    couro: "castanho",
    descricao:
      "Prazos, exigências do INSS, protocolos e produtividade de mais de 12 filiais. Como transformar relatórios em decisões e padronizar a operação com a IA.",
    publico: "Controladoria e gestores das filiais",
    duracao: "45 min",
    aulas: [
      {
        id: "ct1",
        titulo: "A controladoria como torre de controle",
        resumo: "Muita informação, várias filiais e pouco tempo para analisar.",
        corpo: [
          "A controladoria acompanha prazos, exigências do INSS, protocolos e a produtividade de cada filial. O desafio não é ter dados, é transformar os dados em ação.",
          "A IA ajuda a ler relatórios, encontrar padrões, escrever análises e padronizar procedimentos para todas as filiais.",
          "O papel da equipe continua o mesmo: conferir, decidir e cobrar. A IA tira o trabalho braçal do caminho.",
        ],
      },
      {
        id: "ct2",
        titulo: "Relatórios a partir do ADVBOX",
        resumo: "Da exportação à análise em poucos minutos.",
        corpo: [
          "Exporte o relatório do ADVBOX em planilha, remova os nomes de clientes e cole na IA com uma pergunta clara.",
          "Boas perguntas: quais filiais têm mais tarefas atrasadas, quais tipos de processo param mais tempo em uma etapa, quem está sobrecarregado.",
          "Peça o resultado em tabela e um resumo de 5 linhas para levar à reunião.",
        ],
        dica: "Guarde os prompts que funcionaram. Na semana seguinte, é só exportar e colar de novo.",
      },
      {
        id: "ct3",
        titulo: "Prazos, intimações e exigências",
        resumo: "Do texto da intimação para uma lista de tarefas.",
        corpo: [
          "Cole o texto de uma intimação ou de uma exigência do INSS e peça uma lista de tarefas com o que precisa ser feito, os documentos necessários e quem deve fazer.",
          "A IA extrai as informações, mas a contagem do prazo é sempre feita e conferida por uma pessoa, no sistema do escritório.",
          "Com o tempo, as listas viram checklists padrão para os tipos de exigência mais comuns.",
        ],
      },
      {
        id: "ct4",
        titulo: "Padronização entre as filiais",
        resumo: "POPs, checklists, atas e comunicados.",
        corpo: [
          "Um procedimento operacional padrão (POP) garante que todas as filiais façam a mesma tarefa do mesmo jeito. Descreva como a tarefa é feita hoje e peça para a IA transformar em POP.",
          "Depois de reuniões, cole as anotações e peça uma ata com decisões, responsáveis e prazos.",
          "Comunicados para as filiais saem mais claros quando você pede uma versão para e-mail e outra curta para o WhatsApp.",
        ],
      },
      {
        id: "ct5",
        titulo: "Indicadores que importam",
        resumo: "Poucos números, acompanhados toda semana.",
        corpo: [
          "Exemplos de indicadores: tempo médio do lead até o contrato, contratos por filial no mês, protocolos por semana, exigências pendentes e tarefas atrasadas por setor.",
          "A IA ajuda a definir cada indicador, de onde tirar o dado e qual meta faz sentido para começar.",
          "Indicador bom é aquele que alguém olha toda semana e que gera uma ação quando sai do esperado.",
        ],
      },
    ],
    prompts: [
      {
        id: "ctp1",
        titulo: "Relatório de produtividade por filial",
        quando: "Na preparação da reunião semanal.",
        texto:
          "Abaixo está um relatório exportado do ADVBOX (sem nomes de clientes) com as colunas [COLUNAS].\n\nAnalise e me entregue: (1) tabela com tarefas concluídas e atrasadas por filial, (2) as 3 filiais com mais atrasos e o tipo de tarefa que mais atrasa, (3) um resumo de 5 linhas para a reunião.\n\nUse só os dados do relatório. Se algo não puder ser calculado, diga.\n\n[COLE O RELATÓRIO]",
      },
      {
        id: "ctp2",
        titulo: "Transformar intimação ou exigência em tarefas",
        quando: "Ao receber uma intimação ou exigência do INSS.",
        texto:
          "Leia o texto abaixo (intimação ou exigência do INSS, sem dados pessoais) e monte uma lista de tarefas com: o que deve ser feito, documentos necessários, setor responsável e se depende do cliente.\n\nTranscreva qualquer prazo exatamente como aparece no texto, sem calcular datas.\n\n[COLE O TEXTO]",
      },
      {
        id: "ctp3",
        titulo: "Criar um POP",
        quando: "Para padronizar uma tarefa entre as filiais.",
        texto:
          "Transforme a descrição abaixo em um Procedimento Operacional Padrão para as filiais de um escritório de advocacia.\n\nEstrutura: objetivo, responsável, quando fazer, passo a passo numerado, checklist final e erros comuns a evitar. Linguagem direta, frases curtas.\n\nComo fazemos hoje:\n[DESCREVA A TAREFA]",
      },
      {
        id: "ctp4",
        titulo: "Ata de reunião",
        quando: "Logo depois de uma reunião.",
        texto:
          "Transforme as anotações abaixo em uma ata de reunião com: data, participantes, assuntos discutidos, decisões tomadas e uma tabela de ações (ação | responsável | prazo).\n\nNão invente decisões. Se algo ficou em aberto, liste em \"Pendências\".\n\n[COLE AS ANOTAÇÕES]",
      },
      {
        id: "ctp5",
        titulo: "Comunicado para as filiais",
        quando: "Para avisar uma mudança de processo ou regra.",
        texto:
          "Escreva um comunicado para as mais de 12 filiais do escritório sobre: [ASSUNTO].\n\nFaça duas versões: uma para e-mail (até 12 linhas, com o que muda, a partir de quando e quem procurar em caso de dúvida) e uma para WhatsApp (até 4 linhas).",
      },
      {
        id: "ctp6",
        titulo: "Definir indicadores",
        quando: "Para montar ou revisar o painel da controladoria.",
        texto:
          "Sou da controladoria de um escritório previdenciário com mais de 12 filiais e os setores Comercial, Financeiro e Jurídico. Usamos o ADVBOX.\n\nSugira 6 indicadores semanais. Para cada um: nome, fórmula simples, de onde tirar o dado, meta inicial sugerida e qual ação tomar quando sair do esperado.",
      },
    ],
    casos: [
      {
        titulo: "A reunião de segunda-feira",
        antes: "Na sexta à tarde, a equipe montava o relatório de produtividade cruzando planilhas à mão.",
        depois: "Exportação do ADVBOX + prompt salvo. A análise por filial sai pronta e a equipe só confere e comenta.",
        ganho: "Reunião com dados atualizados e sem horas de preparo",
      },
      {
        titulo: "Uma regra nova para 12 filiais",
        antes: "Cada filial entendia a mudança de um jeito, e o padrão se perdia em poucas semanas.",
        depois: "POP criado com a IA, comunicado em duas versões e checklist para a filial confirmar a adoção.",
        ganho: "Mesmo procedimento em todas as filiais",
      },
      {
        titulo: "A exigência do INSS",
        antes: "O texto da exigência era repassado por mensagem e alguns documentos ficavam para trás.",
        depois: "A IA transforma a exigência em lista de tarefas com responsáveis. A controladoria lança o prazo no sistema.",
        ganho: "Menos exigências cumpridas pela metade",
      },
    ],
    cuidados: [
      "Prazos são sempre contados e conferidos por uma pessoa no sistema do escritório.",
      "Relatórios exportados têm os nomes de clientes removidos antes de ir para a IA.",
      "Análises da IA são ponto de partida para a reunião, não decisão final.",
      "POPs e comunicados são aprovados pela coordenação antes de chegar às filiais.",
      "Guarde os prompts que funcionam em uma biblioteca da equipe.",
    ],
    exame: [
      {
        pergunta: "A IA leu uma intimação e calculou o prazo final. O que fazer?",
        opcoes: ["Lançar a data direto no sistema", "Conferir a contagem do prazo por uma pessoa antes de lançar", "Ignorar o prazo e esperar o advogado"],
        correta: 1,
        explicacao: "A IA pode errar a contagem. Prazo é responsabilidade da equipe e é sempre conferido.",
      },
      {
        pergunta: "Antes de colar um relatório do ADVBOX na IA:",
        opcoes: ["Remover nomes de clientes", "Converter em imagem", "Enviar só para a conta pessoal"],
        correta: 0,
        explicacao: "Relatórios têm dados de clientes. Anonimize e use a conta corporativa.",
      },
      {
        pergunta: "Um bom indicador é aquele que:",
        opcoes: ["Tem muitos números juntos", "É acompanhado com frequência e gera uma ação", "Só aparece no fechamento do ano"],
        correta: 1,
        explicacao: "Indicador útil é olhado toda semana e muda alguma decisão.",
      },
    ],
  },
];

export const totais = {
  volumes: trilhas.length,
  aulas: trilhas.reduce((n, t) => n + t.aulas.length, 0),
  prompts: trilhas.reduce((n, t) => n + t.prompts.length, 0),
  casos: trilhas.reduce((n, t) => n + t.casos.length, 0),
};
