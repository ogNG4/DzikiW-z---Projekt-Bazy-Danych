import { Text, Flex, Image, Button, Box, Grid } from "@chakra-ui/react";
import AboutUsCard from "./AboutUsCard";
import React from "react";

const ABOUT_US = [
  {
    title: "Wygoda",
    text: `Wypożyczalnia samochodowa oferuje wygodę jako kluczowy atut dla swoich klientów. Dzięki naszej usłudze wypożyczania samochodów, nasi klienci mogą cieszyć się łatwym i dogodnym dostępem do pojazdów, które spełniają ich potrzeby.

Oto dlaczego wygoda jest naszym wyróżniającym elementem:

- Rezerwacja online: Zapewniamy intuicyjną platformę online, gdzie klienci mogą łatwo przeglądać dostępne samochody, sprawdzać ich dostępność w czasie rzeczywistym oraz dokonywać rezerwacji w dogodny dla siebie sposób. 
  
  To pozwala zaoszczędzić czas i eliminuje konieczność osobistego wizyty w biurze wypożyczalni.

- Szeroki wybór pojazdów: Nasza firma oferuje różnorodność modeli samochodów, aby sprostać różnym preferencjom i potrzebom klientów. 
  
  Bez względu na to, czy ktoś potrzebuje kompaktowego auta na wypad weekendowy, czy przestronnego SUV-a na rodzinne wakacje, mamy odpowiedni pojazd do zaoferowania.

- Odbiór i zwrot samochodu: Dążymy do zapewnienia jak największej wygody naszym klientom. Oferujemy elastyczne opcje odbioru i zwrotu samochodów. 

  Klienci mogą wybrać dogodne miejsce odbioru i zwrotu, takie jak lotnisko, dworzec kolejowy czy inna wybrana lokalizacja, co umożliwia im bezproblemowe podróżowanie od razu po przyjeździe.

- Przejrzysta polityka wynajmu: Nasza firma stawia na przejrzystość i uczciwość. Zasady wynajmu są jasno określone, a umowy są czytelne i zrozumiałe. Klienci nie muszą obawiać się ukrytych opłat ani niejasności dotyczących warunków wynajmu.`,
  },

  {
    title: "Serwis 24/7",
    text: `Nasza firma zapewnia serwis samochodowy dostępny 24 godziny na dobę, 7 dni w tygodniu. Zależy nam na tym, aby nasi klienci mieli pewność, że w razie jakiejkolwiek awarii lub problemu z samochodem, mogą liczyć na naszą pomoc.

Oto dlaczego nasz serwis 24/7 jest niezwykle wartościowy:

- Natychmiastowa pomoc: Nasi klienci mogą skontaktować się z naszym serwisem o dowolnej porze dnia i nocy. Bez względu na to, czy to problem z mechaniką, awaria czy inne pilne zgłoszenie, nasz zespół będzie gotowy, aby udzielić pomocy i rozwiązać problem jak najszybciej.

- Profesjonalny personel: Nasz serwis samochodowy składa się z wykwalifikowanych mechaników i techników, którzy posiadają doświadczenie w naprawie różnych marek i modeli samochodów. Dzięki ich wiedzy i umiejętnościom, możemy zapewnić wysoką jakość usług serwisowych.

- Mobilność bez przeszkód: Dzięki naszemu serwisowi 24/7, nasi klienci nie muszą martwić się o ewentualne przestoje w podróży z powodu problemów technicznych. Bez względu na miejsce i czas, nasz zespół serwisowy jest gotowy, aby zapewnić niezbędną pomoc i przywrócić samochód do pełnej sprawności.

- Bezpieczeństwo i spokój: Wiedza o tym, że nasza firma oferuje serwis samochodowy przez całą dobę, daje klientom poczucie bezpieczeństwa i spokoju. Mogą cieszyć się podróżą, mając pewność, że w razie potrzeby mogą liczyć na naszą kompleksową i niezawodną obsługę.`,
  },
  {
    title: "Bezpieczeństwo",
    text: `Bezpieczeństwo jest dla naszej firmy najwyższym priorytetem. Zależy nam na tym, aby nasi klienci czuli się pewnie i bezpiecznie podczas korzystania z naszych usług. Dlatego oferujemy:

- Regularne przeglądy techniczne: Nasze samochody przechodzą regularne przeglądy techniczne, które zapewniają, że są w dobrym stanie technicznym i spełniają wszystkie niezbędne standardy bezpieczeństwa. Dbamy o to, aby nasze pojazdy były w pełni sprawne i gotowe do bezpiecznej jazdy.

- Ubezpieczenie samochodów: Wszystkie nasze samochody są ubezpieczone, co daje naszym klientom dodatkowe poczucie bezpieczeństwa. W przypadku nieprzewidzianych sytuacji, takich jak wypadek czy kradzież, nasze ubezpieczenie chroni naszych klientów przed nieoczekiwanymi kosztami.

- Pomoc drogowa: W razie awarii lub incydentu na drodze, zapewniamy naszym klientom pełną pomoc drogową. Nasz zespół jest gotowy, aby udzielić niezbędnej pomocy, takiej jak holowanie samochodu, dostarczenie paliwa czy otwarcie zablokowanego pojazdu. Dzięki temu nasi klienci mogą czuć się bezpiecznie i spokojnie nawet w trudnych sytuacjach.

- Dbałość o higienę: W obecnych czasach bezpieczeństwo obejmuje również dbałość o higienę. Przed każdym wynajmem samochód jest dokładnie czyszczony i dezynfekowany, aby zapewnić naszym klientom czyste i bezpieczne środowisko podróży.

- Bezpieczne metody płatności: Oferujemy bezpieczne metody płatności, takie jak płatności online czy karty kredytowe, które zapewniają naszym klientom ochronę i poufność danych finansowych.

Dla nas bezpieczeństwo to nie tylko słowo - to fundament naszej działalności. Robimy wszystko, co w naszej mocy, aby nasi klienci czuli się bezpiecznie i zaufali nam podczas korzystania z naszych usług wypożyczalni samochodów.`,
  },
];
function AboutUs() {
  return (
    <>
      <Flex flexDirection={"column"} alignItems={"center"} my={"5rem"}>
        <Box w={"max-content"}>
          <Text
            fontSize={{ base: "1.6rem", md: "2.7rem" }}
            fontWeight={"400"}
            textTransform={"uppercase"}
            letterSpacing={"5px"}
          >
            Dlaczego my?
          </Text>
        </Box>
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr 1fr" }}
          gap={6}
          mt={"3rem"}
          p={"1rem"}
        >
          {ABOUT_US.map((item) => (
            <AboutUsCard key={item.title} title={item.title} text={item.text} />
          ))}
        </Grid>
      </Flex>
    </>
  );
}

export default AboutUs;
