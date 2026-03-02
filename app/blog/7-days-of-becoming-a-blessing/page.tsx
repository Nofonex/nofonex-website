import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Tag } from "lucide-react"
import AdBanner from "@/components/ad-banner"
import StyledParagraph from "@/components/styled-paragraph"
import DropCap from "@/components/drop-cap"
import ClientCommentWrapper from "@/components/client-comment-wrapper"

export const metadata: Metadata = {
  title: "7 Days of Becoming a Blessing: A Bilingual Devotional for Professionals",
  description:
    "A 7-day bilingual (English-Dutch) devotional for Christian professionals navigating career change, entrepreneurship, and fear. Biblical encouragement meets real-life application.",
  openGraph: {
    title: "7 Days of Becoming a Blessing | Nofonex Blog",
    description:
      "Bilingual devotional for professionals: overcome fear, embrace change, and become a blessing in your career and community.",
  },
}

export const dynamic = "force-static"

export default function BlogPost() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-10 md:pt-28 md:pb-16 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link href="/blog" className="text-primary hover:underline flex items-center">
                ← Back to Blog
              </Link>
            </div>

            <div className="inline-block bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm font-medium mb-4">
              Faith-Based / Geloofsinhoud
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-primary mb-6">
              7 Days of Becoming a Blessing: A Bilingual Devotional for Professionals
            </h1>
            <p className="text-xl text-gray-600 mb-4 italic">
              7 Dagen van een Zegen Worden: Een Tweetalige Overdenking voor Professionals
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-8">
              <div className="flex items-center">
                <Calendar size={16} className="mr-1" />
                <span>March 2, 2026</span>
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                <span>Xenofon Martokarijo</span>
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                <span>Devotional, Career, Faith & Work, Bilingual</span>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[450px] rounded-lg overflow-hidden mb-10 bg-gradient-to-br from-primary/10 via-secondary/5 to-primary/10 flex items-center justify-center">
              <div className="text-center p-8">
                <p className="text-6xl mb-4">✝️</p>
                <p className="text-2xl font-bold text-primary">7 Days of Becoming a Blessing</p>
                <p className="text-lg text-gray-600 mt-2">For professionals navigating change with faith</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <StyledParagraph>
              <DropCap>Y</DropCap>ou opened your laptop this morning with a knot in your stomach. Maybe the industry is shifting beneath your feet. Maybe clients are drying up, or AI is doing what you used to do — faster and cheaper. Maybe you are sitting in Suriname, the Netherlands, or anywhere in between, wondering: what comes next?
            </StyledParagraph>

            <StyledParagraph>
              This devotional is for you. Not a motivational speech. Not a business course. This is seven days in Scripture with people who faced the same fears you carry — and discovered that God was not asking them to receive a miracle, but to <strong>become</strong> one.
            </StyledParagraph>

            <StyledParagraph variant="highlight">
              <em>Deze overdenking is voor jou. Geen motivatiespeech. Geen businesscursus. Dit zijn zeven dagen in de Schrift met mensen die dezelfde angsten droegen — en ontdekten dat God hen niet vroeg om een wonder te ontvangen, maar om er een te <strong>worden</strong>.</em>
            </StyledParagraph>

            <StyledParagraph>
              Each day follows the same structure: a biblical story, an in-depth look at what was really happening, and a direct connection to your professional life right now. Whether you are an entrepreneur, a freelancer, or someone employed who feels the ground shifting — these stories are for you.
            </StyledParagraph>

            <div className="my-10 p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="font-bold text-primary mb-3">How to Use This Devotional / Hoe Gebruik Je Deze Overdenking</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Read one day each morning before starting work</li>
                <li>Sit with the reflection question — write your answer if you can</li>
                <li>Pray the closing prayer out loud</li>
                <li>Come back at the end of the week for Day 7, which ties everything together</li>
              </ul>
              <p className="mt-3 text-sm text-gray-500 italic">
                Lees elke ochtend één dag vóór je aan het werk gaat. Neem de tijd voor de reflectievraag. Bid het slotgebed hardop.
              </p>
            </div>

            <div className="my-10">
              <AdBanner size="medium" className="bg-gray-50" />
            </div>

            {/* ============ DAY 1 ============ */}
            <div className="border-t-4 border-primary pt-8 mt-12">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Day 1 / Dag 1</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-6">
                Abraham Left Before He Had a Map
              </h2>
              <p className="text-lg text-gray-500 italic mb-6">Abraham Vertrok Voordat Hij een Kaart Had</p>
            </div>

            <StyledParagraph variant="quote">
              &ldquo;The LORD had said to Abram, &lsquo;Go from your country, your people and your father&apos;s household to the land I will show you. I will make you into a great nation, and I will bless you; I will make your name great, and you will be a blessing.&rsquo;&rdquo; — Genesis 12:1-2 (NIV)
            </StyledParagraph>

            <StyledParagraph>
              Notice what God did <strong>not</strong> say. He did not say: &ldquo;Here is the address. Here is the timeline. Here is the business plan.&rdquo; He said: <em>Go. I will show you.</em>
            </StyledParagraph>

            <StyledParagraph>
              Abraham was not a young adventurer. He was 75 years old, established in Haran, with wealth, servants, and a settled life. God was asking him to leave everything he had built — not because it was bad, but because something bigger required him to move.
            </StyledParagraph>

            <StyledParagraph>
              The Hebrew word for &ldquo;go&rdquo; here is <em>lekh-lekha</em> (לֶךְ-לְךָ), which literally means &ldquo;go to yourself&rdquo; or &ldquo;go for yourself.&rdquo; Rabbinical scholars have long interpreted this as: go on a journey that will reveal who you truly are. The leaving was not just geographical — it was an identity shift.
            </StyledParagraph>

            <StyledParagraph variant="callout" bgColor="blue">
              <strong>Het Hebreeuwse woord voor &ldquo;ga&rdquo; is hier <em>lekh-lekha</em> (לֶךְ-לְךָ)</strong>, wat letterlijk betekent &ldquo;ga naar jezelf&rdquo; of &ldquo;ga voor jezelf.&rdquo; Het vertrek was niet alleen geografisch — het was een identiteitsverschuiving.
            </StyledParagraph>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">For the Professional</h3>

            <StyledParagraph>
              Maybe your industry is changing. Maybe you built a career in translation, and AI is now doing it in seconds. Maybe you started a business that worked for years, and suddenly the clients are gone. You are sitting with what Abraham sat with: the discomfort of knowing that what got you here will not take you where you need to go.
            </StyledParagraph>

            <StyledParagraph>
              Here is the key: God did not just tell Abraham to leave. He told him <strong>why</strong>: &ldquo;You will be a blessing.&rdquo; The purpose of the move was not survival — it was significance. God was not rescuing Abraham from danger. He was positioning him for impact.
            </StyledParagraph>

            <StyledParagraph>
              Your career change, your pivot, your scary next step — maybe it is not about escaping what is failing. Maybe God is positioning you to bless people in ways your old role never could.
            </StyledParagraph>

            <div className="my-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Reflection / Reflectie</h4>
              <p className="text-gray-700">What are you holding onto that God might be asking you to leave — not because it is bad, but because He has something bigger?</p>
              <p className="text-gray-500 italic mt-2 text-sm">Waar houd je aan vast waarvan God misschien vraagt om los te laten — niet omdat het slecht is, maar omdat Hij iets groters heeft?</p>
            </div>

            <div className="my-8 p-6 bg-secondary/5 rounded-lg">
              <h4 className="font-bold text-secondary mb-2">Prayer / Gebed</h4>
              <p className="text-gray-700 italic">Lord, I confess that the unknown terrifies me. Like Abraham, I have built something here — my skills, my reputation, my comfort. But I hear You calling me forward. Give me the courage to step out before I see the full road. I choose to trust that You are making me into a blessing, even when I cannot yet see how. Amen.</p>
              <p className="text-gray-500 italic mt-3 text-sm">Heer, ik beken dat het onbekende mij angst aanjaagt. Net als Abraham heb ik hier iets opgebouwd. Maar ik hoor U mij voorwaarts roepen. Geef mij de moed om te stappen voordat ik de hele weg zie. Ik kies ervoor om te vertrouwen dat U mij tot een zegen maakt, zelfs als ik nog niet kan zien hoe. Amen.</p>
            </div>

            {/* ============ DAY 2 ============ */}
            <div className="border-t-4 border-primary pt-8 mt-12">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Day 2 / Dag 2</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-6">
                Joseph Worked in the Prison, Not Just Waited In It
              </h2>
              <p className="text-lg text-gray-500 italic mb-6">Jozef Werkte in de Gevangenis, Hij Wachtte Er Niet Alleen</p>
            </div>

            <StyledParagraph variant="quote">
              &ldquo;But while Joseph was there in the prison, the LORD was with him; he showed him kindness and granted him favor in the eyes of the prison warden. So the warden put Joseph in charge of all those held in the prison, and he was made responsible for all that was done there.&rdquo; — Genesis 39:20-22 (NIV)
            </StyledParagraph>

            <StyledParagraph>
              Joseph had every reason to sit in a corner and give up. Sold by his own brothers. Falsely accused by his employer&apos;s wife. Thrown into prison in a foreign country with no trial, no lawyer, no timeline for release. He was 17 when he was sold. He would be 30 before Pharaoh called him. Thirteen years.
            </StyledParagraph>

            <StyledParagraph>
              But the text says something remarkable: even in prison, Joseph <strong>worked</strong>. He did not just survive — he managed. He organized. He served. He interpreted dreams for fellow prisoners who could give him nothing in return. He made himself useful in a place that was designed to make him useless.
            </StyledParagraph>

            <StyledParagraph variant="callout" bgColor="green">
              <strong>Zelfs in de gevangenis werkte Jozef.</strong> Hij overleefde niet alleen — hij beheerde, organiseerde en diende. Hij maakte zichzelf nuttig op een plek die bedoeld was om hem nutteloos te maken. Dit is het verschil tussen passief wachten en actief wachten.
            </StyledParagraph>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">Waiting Is Not Passive / Wachten Is Niet Passief</h3>

            <StyledParagraph>
              Here is what most people get wrong about biblical waiting: they think it means sitting still. It does not. The Hebrew concept of <em>qavah</em> (קָוָה), often translated as &ldquo;wait on the Lord,&rdquo; actually carries the meaning of binding together, like twisting threads into a rope. Waiting on God means actively intertwining your work with His purpose — becoming stronger in the tension, not weaker.
            </StyledParagraph>

            <StyledParagraph>
              Joseph&apos;s thirteen years were not wasted time. They were training ground. Every skill he practiced in Potiphar&apos;s house and in prison — administration, people management, resource allocation, crisis handling — he used later when he stood before Pharaoh and was asked to manage the economy of Egypt.
            </StyledParagraph>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">For the Professional</h3>

            <StyledParagraph>
              You might be in a season where nothing seems to move. Clients are slow. Revenue is down. The projects you pitch get no response. It feels like prison. But the question is not: &ldquo;Why am I stuck here?&rdquo; The question is: &ldquo;What am I doing while I am here?&rdquo;
            </StyledParagraph>

            <StyledParagraph>
              Are you sharpening your skills? Building something even when no one is paying for it yet? Serving others in your community, your church, your network — not for exposure, but because that is who you are becoming? Joseph did not know that his prison work was his rehearsal for the palace. You do not know what God is rehearsing you for either.
            </StyledParagraph>

            <div className="my-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Reflection / Reflectie</h4>
              <p className="text-gray-700">Where in your professional life does it feel like &ldquo;prison&rdquo;? What productive work can you do there that serves others — even without immediate reward?</p>
              <p className="text-gray-500 italic mt-2 text-sm">Waar in je professionele leven voelt het als &ldquo;gevangenis&rdquo;? Welk productief werk kun je daar doen dat anderen dient — zelfs zonder directe beloning?</p>
            </div>

            <div className="my-8 p-6 bg-secondary/5 rounded-lg">
              <h4 className="font-bold text-secondary mb-2">Prayer / Gebed</h4>
              <p className="text-gray-700 italic">Father, I confess I have been waiting passively — frustrated, anxious, wondering when things will change. But I see from Joseph&apos;s life that waiting is not sitting still. Show me the work You have for me right here, right now. Let me serve faithfully in this season, trusting that You are preparing something I cannot yet see. Amen.</p>
              <p className="text-gray-500 italic mt-3 text-sm">Vader, ik beken dat ik passief heb gewacht — gefrustreerd, angstig, me afvragend wanneer dingen zullen veranderen. Maar ik zie uit Jozefs leven dat wachten niet stilzitten is. Toon mij het werk dat U voor mij hebt, hier en nu. Laat mij trouw dienen in dit seizoen. Amen.</p>
            </div>

            <div className="my-10">
              <AdBanner size="medium" className="bg-gray-50" />
            </div>

            {/* ============ DAY 3 ============ */}
            <div className="border-t-4 border-primary pt-8 mt-12">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Day 3 / Dag 3</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-6">
                Moses Had to Unlearn Egypt Before He Could Lead Israel
              </h2>
              <p className="text-lg text-gray-500 italic mb-6">Mozes Moest Egypte Afleren Voordat Hij Israël Kon Leiden</p>
            </div>

            <StyledParagraph variant="quote">
              &ldquo;Moses was educated in all the wisdom of the Egyptians and was powerful in speech and action. When Moses was forty years old, he decided to visit his own people, the Israelites.&rdquo; — Acts 7:22-23 (NIV)
            </StyledParagraph>

            <StyledParagraph>
              Moses had the best education in the ancient world. Raised in Pharaoh&apos;s palace, trained in Egyptian administration, military strategy, and rhetoric. By 40, he was powerful, connected, and capable. He had every tool to succeed — by Egyptian standards.
            </StyledParagraph>

            <StyledParagraph>
              Then he killed a man in anger, fled to the desert, and spent 40 years herding sheep.
            </StyledParagraph>

            <StyledParagraph>
              Forty years. Not learning new skills. <strong>Unlearning</strong> old ones. The confidence of Egyptian training had to be replaced with the humility of a shepherd. The eloquence of court speech had to give way to a stutter and a staff. When God finally called him at the burning bush, Moses said: &ldquo;Who am I?&rdquo; (Exodus 3:11).
            </StyledParagraph>

            <StyledParagraph>
              This was not weakness. This was readiness. The man who once tried to deliver Israel by killing an Egyptian now understood that deliverance comes from God, not from personal power.
            </StyledParagraph>

            <StyledParagraph variant="callout" bgColor="purple">
              <strong>Mozes die zei &ldquo;Wie ben ik?&rdquo; was niet zwak — hij was gereed.</strong> De man die ooit Israël probeerde te bevrijden door een Egyptenaar te doden, begreep nu dat bevrijding van God komt, niet van eigen kracht. Soms moet je afleren wat je geleerd hebt om te worden wie je moet zijn.
            </StyledParagraph>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">For the Professional</h3>

            <StyledParagraph>
              If you built your career on a skill that is becoming obsolete, this story is for you. The temptation is to panic: &ldquo;I need to learn something new immediately!&rdquo; But sometimes God&apos;s first step is not learning — it is unlearning. Letting go of the identity that was tied to what you could do, and rediscovering who you are apart from your output.
            </StyledParagraph>

            <StyledParagraph>
              The freelance translator whose work is being replaced by AI. The developer whose framework is deprecated. The marketer whose strategies no longer convert. Your Egyptian education — the skills that gave you status — may need to be laid down before God can use you in the next chapter.
            </StyledParagraph>

            <StyledParagraph>
              This is not failure. Moses&apos; desert was not a punishment. It was a preparation. And the leader who emerged from 40 years of sheep and silence was infinitely more useful to God than the powerful prince of Egypt.
            </StyledParagraph>

            <div className="my-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Reflection / Reflectie</h4>
              <p className="text-gray-700">What professional identity or skill have you been clinging to? What would it look like to hold it loosely and ask God: &ldquo;What do You want me to become?&rdquo;</p>
              <p className="text-gray-500 italic mt-2 text-sm">Aan welke professionele identiteit of vaardigheid klamp je je vast? Hoe zou het eruit zien om het los te houden en God te vragen: &ldquo;Wat wilt U dat ik word?&rdquo;</p>
            </div>

            <div className="my-8 p-6 bg-secondary/5 rounded-lg">
              <h4 className="font-bold text-secondary mb-2">Prayer / Gebed</h4>
              <p className="text-gray-700 italic">God, I built my confidence on what I could do. Now that is shifting, and I feel lost. But I see in Moses that the desert was not a dead end — it was a doorway. Strip away anything in me that trusts my own power more than Yours. Teach me humility. Prepare me for what is next. Amen.</p>
              <p className="text-gray-500 italic mt-3 text-sm">God, ik bouwde mijn vertrouwen op wat ik kon doen. Nu verschuift dat en ik voel me verloren. Maar ik zie in Mozes dat de woestijn geen doodlopende weg was — het was een doorgang. Leer mij nederigheid. Bereid mij voor op wat komt. Amen.</p>
            </div>

            {/* ============ DAY 4 ============ */}
            <div className="border-t-4 border-primary pt-8 mt-12">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Day 4 / Dag 4</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-6">
                Ruth Chose Loyalty Over Security — and God Multiplied It
              </h2>
              <p className="text-lg text-gray-500 italic mb-6">Ruth Koos Loyaliteit Boven Zekerheid — en God Vermenigvuldigde Het</p>
            </div>

            <StyledParagraph variant="quote">
              &ldquo;But Ruth replied, &lsquo;Don&apos;t urge me to leave you or to turn back from you. Where you go I will go, and where you stay I will stay. Your people will be my people and your God my God.&rsquo;&rdquo; — Ruth 1:16 (NIV)
            </StyledParagraph>

            <StyledParagraph>
              Ruth&apos;s situation was desperate. Her husband had died. Her father-in-law had died. She was a Moabite woman in a culture that offered no social safety net for widows. Her mother-in-law Naomi was returning to Bethlehem with nothing — no money, no prospects, no plan. Going with Naomi was, by every rational calculation, the wrong move.
            </StyledParagraph>

            <StyledParagraph>
              Orpah, the other daughter-in-law, made the sensible choice. She went back to her family, to her people, to security. Scripture does not judge her for it. But Ruth chose differently. She chose a relationship over a strategy. She chose to <strong>be</strong> something — loyal, present, committed — rather than to <strong>get</strong> something.
            </StyledParagraph>

            <StyledParagraph>
              And then she worked. Ruth did not sit in Bethlehem waiting for provision. She went to the fields and gleaned — the ancient world&apos;s equivalent of picking up scraps. She did the lowest, hardest, most unglamorous work available. She did not wait for a miracle. She put herself in a position where God&apos;s provision could find her.
            </StyledParagraph>

            <StyledParagraph variant="callout" bgColor="orange">
              <strong>Ruth wachtte niet op een wonder.</strong> Ze plaatste zichzelf in een positie waar Gods voorzienigheid haar kon vinden. Ze deed het laagste, hardste, minst glamoureuze werk dat beschikbaar was. En precies daar — op het veld van Boaz — opende God de deur die haar leven zou veranderen.
            </StyledParagraph>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">For the Professional</h3>

            <StyledParagraph>
              When income drops and opportunities dry up, the temptation is to chase the quickest paycheck — even if it means abandoning the people, values, and calling you committed to. Ruth&apos;s story challenges that logic. She did not optimize for maximum income. She optimized for faithfulness. And God placed her in the genealogy of Jesus Christ (Matthew 1:5).
            </StyledParagraph>

            <StyledParagraph>
              There is a principle here for every entrepreneur and freelancer: when you choose to bless others — your family, your clients, your community — even at personal cost, you position yourself in God&apos;s economy. That economy does not follow spreadsheets. It follows faithfulness.
            </StyledParagraph>

            <StyledParagraph>
              Maybe your &ldquo;gleaning&rdquo; right now is taking on small projects that do not pay much. Helping a friend with their business. Writing content that gets no views yet. Do the work. Be faithful. God sees the field you are working in.
            </StyledParagraph>

            <div className="my-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Reflection / Reflectie</h4>
              <p className="text-gray-700">Where is your &ldquo;field of gleaning&rdquo; right now? What faithful, unglamorous work is God asking you to do — not for applause, but because it is right?</p>
              <p className="text-gray-500 italic mt-2 text-sm">Waar is jouw &ldquo;veld van aren lezen&rdquo; op dit moment? Welk trouw, onopvallend werk vraagt God van je — niet voor applaus, maar omdat het goed is?</p>
            </div>

            <div className="my-8 p-6 bg-secondary/5 rounded-lg">
              <h4 className="font-bold text-secondary mb-2">Prayer / Gebed</h4>
              <p className="text-gray-700 italic">Father, I want security. I want the guaranteed path. But Ruth shows me that faithfulness is the path. Help me to keep showing up, keep serving, keep blessing others even when my own needs feel urgent. I trust that You see my field. Provide as You promised. Amen.</p>
              <p className="text-gray-500 italic mt-3 text-sm">Vader, ik wil zekerheid. Ik wil het gegarandeerde pad. Maar Ruth laat mij zien dat trouw het pad is. Help mij om te blijven opdagen, te blijven dienen, te blijven zegenen — zelfs wanneer mijn eigen noden dringend voelen. Ik vertrouw erop dat U mijn veld ziet. Amen.</p>
            </div>

            <div className="my-10">
              <AdBanner size="medium" className="bg-gray-50" />
            </div>

            {/* ============ DAY 5 ============ */}
            <div className="border-t-4 border-primary pt-8 mt-12">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Day 5 / Dag 5</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-6">
                Nehemiah Built With a Sword in One Hand and a Trowel in the Other
              </h2>
              <p className="text-lg text-gray-500 italic mb-6">Nehemia Bouwde Met een Zwaard in de Ene Hand en een Troffel in de Andere</p>
            </div>

            <StyledParagraph variant="quote">
              &ldquo;Those who carried materials did their work with one hand and held a weapon in the other, and each of the builders wore his sword at his side as he worked.&rdquo; — Nehemiah 4:17-18 (NIV)
            </StyledParagraph>

            <StyledParagraph>
              Nehemiah was a cupbearer to the Persian king — a trusted position, comfortable and safe. Then he heard that Jerusalem&apos;s walls were broken, its gates burned, and its people humiliated. He wept. He prayed. He fasted. And then he <strong>asked for resources and went</strong>.
            </StyledParagraph>

            <StyledParagraph>
              What Nehemiah found when he arrived was worse than the report. The wall was rubble. The people were demoralized. And the moment he started building, enemies appeared — mocking, threatening, plotting attacks. His response is one of the most practical leadership moments in all of Scripture: he split the workforce. Half built. Half guarded. And those who built did so with a tool in one hand and a weapon in the other.
            </StyledParagraph>

            <StyledParagraph>
              Nehemiah did not wait for the opposition to disappear before building. He built <strong>in the middle of the opposition</strong>. He acknowledged the danger and kept working anyway.
            </StyledParagraph>

            <StyledParagraph variant="callout" bgColor="blue">
              <strong>Nehemia wachtte niet tot de oppositie verdween.</strong> Hij bouwde midden in de oppositie. Hij erkende het gevaar en bleef toch werken. Het zwaard was niet een teken van angst — het was een teken van realisme gecombineerd met geloof.
            </StyledParagraph>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">For the Professional</h3>

            <StyledParagraph>
              Fear of change in your career often comes with real threats: financial pressure, family obligations, competitors, market disruption. The temptation is to either ignore the threats (denial) or stop building (paralysis). Nehemiah chose neither. He was realistic about the danger and relentless about the work.
            </StyledParagraph>

            <StyledParagraph>
              This is what entrepreneurship with faith looks like. You build your website while worrying about rent. You write content while competitors undercut you. You learn new skills while your old ones still pay the bills. Sword and trowel. Prayer and spreadsheets. Faith and action.
            </StyledParagraph>

            <StyledParagraph>
              The wall was completed in 52 days (Nehemiah 6:15). When the surrounding nations heard, they lost their confidence — because they realized the work had been done with God&apos;s help. Your work, done faithfully under pressure, sends the same message.
            </StyledParagraph>

            <div className="my-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Reflection / Reflectie</h4>
              <p className="text-gray-700">What are you trying to build right now? What opposition are you facing? How can you hold both the sword (wisdom, boundaries, realistic planning) and the trowel (the actual work) at the same time?</p>
              <p className="text-gray-500 italic mt-2 text-sm">Wat probeer je nu te bouwen? Welke oppositie ervaar je? Hoe kun je tegelijkertijd het zwaard (wijsheid, grenzen, realistisch plannen) en de troffel (het eigenlijke werk) vasthouden?</p>
            </div>

            <div className="my-8 p-6 bg-secondary/5 rounded-lg">
              <h4 className="font-bold text-secondary mb-2">Prayer / Gebed</h4>
              <p className="text-gray-700 italic">Lord, I see the broken walls in my professional life and I feel the weight of rebuilding. I also see the opposition — financial pressure, doubt, competition, discouragement. Like Nehemiah, I will not stop building. Give me the discipline to hold the sword and the trowel. Let my enemies see that this work is done by Your hand. Amen.</p>
              <p className="text-gray-500 italic mt-3 text-sm">Heer, ik zie de gebroken muren in mijn professionele leven en ik voel het gewicht van de wederopbouw. Ik zie ook de oppositie. Net als Nehemia zal ik niet stoppen met bouwen. Geef mij de discipline om het zwaard en de troffel vast te houden. Amen.</p>
            </div>

            {/* ============ DAY 6 ============ */}
            <div className="border-t-4 border-primary pt-8 mt-12">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Day 6 / Dag 6</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-6">
                The Widow of Zarephath Gave Her Last — and Her Supply Never Ran Out
              </h2>
              <p className="text-lg text-gray-500 italic mb-6">De Weduwe van Zarfath Gaf Haar Laatste — en Haar Voorraad Raakte Nooit Op</p>
            </div>

            <StyledParagraph variant="quote">
              &ldquo;Elijah said to her, &lsquo;Don&apos;t be afraid. Go home and do as you have said. But first make a small loaf of bread for me from what you have and bring it to me, and then make something for yourself and your son.&rsquo;&rdquo; — 1 Kings 17:13 (NIV)
            </StyledParagraph>

            <StyledParagraph>
              This story is uncomfortable. A widow with one meal left — one handful of flour, one drop of oil — enough for her and her son to eat one last time before they starve. And the prophet of God shows up and says: &ldquo;Feed me first.&rdquo;
            </StyledParagraph>

            <StyledParagraph>
              This is either cruel or prophetic. And it is prophetic. Elijah was not taking from her — he was inviting her into a covenant principle: when you give what you have to God&apos;s work, even your last, God multiplies what remains. She baked the bread. She gave it to Elijah. And the flour did not run out. The oil did not dry up. For the entire duration of the famine, she and her son ate.
            </StyledParagraph>

            <StyledParagraph>
              The Hebrew word for &ldquo;jar&rdquo; here (<em>kad</em> כַּד) is the same word used for the jars at the well where Abraham&apos;s servant found Rebekah — another story where generosity to a stranger unlocked a divine destiny. Scripture is consistent: the vessel that gives is the vessel God refills.
            </StyledParagraph>

            <StyledParagraph variant="callout" bgColor="green">
              <strong>De Schrift is consistent: het vat dat geeft, is het vat dat God hervult.</strong> De weduwe had elke reden om nee te zeggen. Maar ze gaf haar laatste, en God vulde bij wat zij niet kon produceren. Dit is het verschil tussen menselijke economie en Gods economie.
            </StyledParagraph>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">For the Professional</h3>

            <StyledParagraph>
              When money is tight, the instinct is to hoard: guard your time, charge for everything, never give for free. And there is wisdom in valuing your work. But there is also a kingdom principle at play: sometimes the breakthrough comes not from earning more, but from giving more.
            </StyledParagraph>

            <StyledParagraph>
              A free article that helps a business owner understand localization. A pro bono translation for a church. A mentoring conversation with a young freelancer. These are not losses on your balance sheet. They are seeds in God&apos;s economy.
            </StyledParagraph>

            <StyledParagraph>
              The widow&apos;s story does not promise that giving will make you rich. It promises that giving in faith, from your need, activates a supply chain that human logic cannot explain. Your flour jar might look empty. But God is watching what you do with the last handful.
            </StyledParagraph>

            <div className="my-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Reflection / Reflectie</h4>
              <p className="text-gray-700">What is your &ldquo;last handful of flour&rdquo;? What skill, time, or resource could you give to someone else this week — not from abundance, but from faith?</p>
              <p className="text-gray-500 italic mt-2 text-sm">Wat is jouw &ldquo;laatste handvol meel&rdquo;? Welke vaardigheid, tijd of bron zou je deze week aan iemand anders kunnen geven — niet vanuit overvloed, maar vanuit geloof?</p>
            </div>

            <div className="my-8 p-6 bg-secondary/5 rounded-lg">
              <h4 className="font-bold text-secondary mb-2">Prayer / Gebed</h4>
              <p className="text-gray-700 italic">Father, my jar feels almost empty. I am tempted to protect what little I have left. But the widow teaches me that giving in faith unlocks Your provision. I bring You what I have — my skills, my time, my work — and I trust You to multiply it. Let me be generous even when I feel poor. Amen.</p>
              <p className="text-gray-500 italic mt-3 text-sm">Vader, mijn kruik voelt bijna leeg. Ik ben geneigd te beschermen wat ik nog heb. Maar de weduwe leert mij dat geven in geloof Uw voorziening ontsluit. Ik breng U wat ik heb — mijn vaardigheden, mijn tijd, mijn werk — en ik vertrouw erop dat U het vermenigvuldigt. Amen.</p>
            </div>

            <div className="my-10">
              <AdBanner size="medium" className="bg-gray-50" />
            </div>

            {/* ============ DAY 7 ============ */}
            <div className="border-t-4 border-primary pt-8 mt-12">
              <p className="text-sm font-semibold text-secondary uppercase tracking-wider">Day 7 / Dag 7</p>
              <h2 className="text-2xl md:text-3xl font-bold text-primary mt-2 mb-6">
                You Are the Blessing — Not Just the Recipient
              </h2>
              <p className="text-lg text-gray-500 italic mb-6">Jij Bent de Zegen — Niet Alleen de Ontvanger</p>
            </div>

            <StyledParagraph variant="quote">
              &ldquo;For we are God&apos;s handiwork, created in Christ Jesus to do good works, which God prepared in advance for us to do.&rdquo; — Ephesians 2:10 (NIV)
            </StyledParagraph>

            <StyledParagraph>
              Let us look back at the week. Six stories. Six people who faced uncertainty, loss, fear, and career disruption:
            </StyledParagraph>

            <div className="my-8 space-y-4">
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="font-bold text-primary min-w-[70px]">Day 1:</span>
                <span><strong>Abraham</strong> left before he had a map — and became the father of nations.</span>
              </div>
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="font-bold text-primary min-w-[70px]">Day 2:</span>
                <span><strong>Joseph</strong> worked in prison — and became the one who saved nations from famine.</span>
              </div>
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="font-bold text-primary min-w-[70px]">Day 3:</span>
                <span><strong>Moses</strong> unlearned Egypt — and became the liberator of God&apos;s people.</span>
              </div>
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="font-bold text-primary min-w-[70px]">Day 4:</span>
                <span><strong>Ruth</strong> chose loyalty over security — and became the great-grandmother of King David.</span>
              </div>
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="font-bold text-primary min-w-[70px]">Day 5:</span>
                <span><strong>Nehemiah</strong> built under opposition — and restored a city in 52 days.</span>
              </div>
              <div className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                <span className="font-bold text-primary min-w-[70px]">Day 6:</span>
                <span><strong>The Widow</strong> gave her last — and her supply never ran out.</span>
              </div>
            </div>

            <StyledParagraph>
              Notice the pattern: none of them received a blessing and then sat on it. They all <strong>became</strong> the blessing. Abraham blessed the nations. Joseph blessed Egypt. Moses blessed Israel. Ruth blessed Naomi, then Boaz, then an entire lineage. Nehemiah blessed a city. The widow blessed a prophet — and through him, herself.
            </StyledParagraph>

            <StyledParagraph>
              The Greek word in Ephesians 2:10 for &ldquo;handiwork&rdquo; is <em>poiema</em> (ποίημα) — from which we get the English word &ldquo;poem.&rdquo; You are God&apos;s poem. Not a factory product. Not a random assemblage. A deliberate, crafted, intentional work of art — made to do good works that were prepared before you were born.
            </StyledParagraph>

            <StyledParagraph variant="callout" bgColor="purple">
              <strong>Het Griekse woord voor &ldquo;maaksel&rdquo; is <em>poiema</em> (ποίημα)</strong> — waarvan ons woord &ldquo;gedicht&rdquo; komt. Je bent Gods gedicht. Geen fabrieksproduct. Een bewust, ambachtelijk, intentioneel kunstwerk — gemaakt om goede werken te doen die van tevoren bereid zijn.
            </StyledParagraph>

            <h3 className="text-xl font-bold text-primary mt-8 mb-4">For the Professional: The Shift</h3>

            <StyledParagraph>
              Here is the shift this devotional has been building toward: stop asking &ldquo;When will my blessing come?&rdquo; and start asking &ldquo;Who can I bless with what I have right now?&rdquo;
            </StyledParagraph>

            <StyledParagraph>
              This is not naive optimism. This is a strategic, biblical reorientation of your professional life. When you shift from receiver to giver — from consumer to creator — from waiting for opportunity to creating value — everything changes. Not because the circumstances change, but because <strong>you</strong> change.
            </StyledParagraph>

            <StyledParagraph>
              Your language skills can bridge cultures. Your experience can mentor others. Your content can teach. Your business can serve. Your faith can encourage. You have more than you think. And the One who made you already planned what to do with it.
            </StyledParagraph>

            <div className="my-8 p-6 bg-primary/5 rounded-lg">
              <h4 className="font-bold text-primary mb-2">Final Reflection / Slotreflectie</h4>
              <p className="text-gray-700 mb-3">Look at this week&apos;s six stories. Which one spoke to you most? Why? What is one concrete step you will take this week to shift from &ldquo;waiting for a blessing&rdquo; to &ldquo;becoming a blessing&rdquo;?</p>
              <p className="text-gray-500 italic text-sm">Kijk naar de zes verhalen van deze week. Welke sprak je het meest aan? Waarom? Wat is één concrete stap die je deze week zult nemen om te verschuiven van &ldquo;wachten op een zegen&rdquo; naar &ldquo;een zegen worden&rdquo;?</p>
            </div>

            <div className="my-8 p-6 bg-secondary/5 rounded-lg">
              <h4 className="font-bold text-secondary mb-2">Closing Prayer / Slotgebed</h4>
              <p className="text-gray-700 italic mb-4">Father, thank You for this week. Thank You for Abraham&apos;s courage, Joseph&apos;s patience, Moses&apos; humility, Ruth&apos;s loyalty, Nehemiah&apos;s resilience, and the widow&apos;s faith. I see now that You were never just preparing blessings <strong>for</strong> them — You were preparing them <strong>to be</strong> blessings.</p>
              <p className="text-gray-700 italic mb-4">Do the same in me. Whatever my career looks like next month, next year, five years from now — let me be a blessing. Let my work serve people. Let my faith encourage others. Let my skills build something that lasts.</p>
              <p className="text-gray-700 italic mb-4">I am Your poem. Write the next verse.</p>
              <p className="text-gray-700 italic">In Jesus&apos; name, Amen.</p>
              <hr className="my-4 border-gray-200" />
              <p className="text-gray-500 italic text-sm">Vader, dank U voor deze week. Ik zie nu dat U nooit alleen zegeningen voor hen bereidde — U bereidde hen om zegeningen te zijn. Doe hetzelfde in mij. Wat mijn carrière er ook uitziet — laat mij een zegen zijn. Laat mijn werk mensen dienen. Laat mijn geloof anderen bemoedigen. Ik ben Uw gedicht. Schrijf het volgende vers. In Jezus&apos; naam, Amen.</p>
            </div>

            {/* ============ WHAT'S NEXT ============ */}
            <div className="border-t-2 border-gray-200 pt-8 mt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                What&apos;s Next? / Wat Nu?
              </h2>

              <StyledParagraph>
                If this devotional encouraged you, here are three ways to continue:
              </StyledParagraph>

              <div className="space-y-4 my-6">
                <div className="flex gap-3 items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">1</span>
                  <div>
                    <p className="font-bold">Share it with someone who needs it.</p>
                    <p className="text-sm text-gray-500">Deel het met iemand die het nodig heeft.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">2</span>
                  <div>
                    <p className="font-bold">Re-read the day that spoke to you most, slowly, one more time.</p>
                    <p className="text-sm text-gray-500">Herlees de dag die je het meest aansprak, langzaam, nog één keer.</p>
                  </div>
                </div>
                <div className="flex gap-3 items-start">
                  <span className="bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">3</span>
                  <div>
                    <p className="font-bold">Take your one concrete step this week. Write it down. Do it.</p>
                    <p className="text-sm text-gray-500">Zet je ene concrete stap deze week. Schrijf het op. Doe het.</p>
                  </div>
                </div>
              </div>

              <div className="my-8 p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-primary/10">
                <h3 className="font-bold text-primary mb-2">Need Help With Your Professional Transition?</h3>
                <p className="text-gray-700 mb-3">
                  At Nofonex, we help professionals and businesses communicate across languages and cultures. Whether you need content that speaks to both Dutch and English audiences, or help positioning your expertise for a global market — we are here to help you build.
                </p>
                <p className="text-gray-500 italic text-sm mb-4">
                  Bij Nofonex helpen we professionals en bedrijven om te communiceren over talen en culturen heen. Of u nu content nodig heeft die zowel Nederlands- als Engelstalige doelgroepen aanspreekt — wij zijn er om u te helpen bouwen.
                </p>
                <Link
                  href="/#contact"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                >
                  Get in Touch / Neem Contact Op
                </Link>
              </div>
            </div>

            {/* Author Section */}
            <div className="mt-12 mb-6 border-t border-gray-200 pt-6">
              <p className="text-gray-500 italic">
                About the author: Xenofon Martokarijo is the founder of Nofonex, a language services and digital content production company based in Suriname. He specializes in English-Dutch translation, MTPE, and creating content that bridges cultures. A committed Christian, he believes that faith and professional excellence are inseparable.
              </p>
              <p className="text-gray-400 italic text-sm mt-2">
                Over de auteur: Xenofon Martokarijo is de oprichter van Nofonex, een taalservice- en digitale contentproductiebedrijf gevestigd in Suriname. Hij is gespecialiseerd in Engels-Nederlandse vertaling, MTPE, en het creëren van content die culturen verbindt. Als toegewijd christen gelooft hij dat geloof en professionele excellentie onafscheidelijk zijn.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClientCommentWrapper postSlug="7-days-of-becoming-a-blessing" />

      <div className="container mx-auto px-4 my-12">
        <AdBanner size="large" className="bg-white" />
      </div>
    </>
  )
}
