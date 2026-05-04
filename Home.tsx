import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Design Philosophy: Cosmic Mystery & Structural Elegance
 * - Dark navy/purple background representing the vast universe
 * - Playfair Display for grand, elegant titles
 * - Inter for clear, readable body text
 * - Smooth scroll-based animations and transitions
 * - Card-based sections for information hierarchy
 * - Parallax effects and staggered animations for depth
 */

interface ScrollRevealElement {
  id: string;
  isVisible: boolean;
}

export default function Home() {
  const [visibleElements, setVisibleElements] = useState<
    Record<string, boolean>
  >({});
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleElements(prev => ({
            ...prev,
            [entry.target.id]: true,
          }));
        }
      });
    }, observerOptions);

    document.querySelectorAll("[data-reveal]").forEach(el => {
      observer.observe(el);
    });

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663610674087/S95DyMAVW3t8ozUjmMqgqM/hero-background-Hr4xtozqwKWE2F5quBHpDj.webp')",
            backgroundAttachment: "fixed",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/50 to-background" />
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1
            className="text-6xl md:text-7xl font-bold mb-6 font-playfair animate-fade-in"
            style={{
              background:
                "linear-gradient(135deg, #a8d8ff 0%, #d8a8ff 50%, #a8d8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            명조 3.3
          </h1>
          <h2
            className="text-2xl md:text-3xl mb-8 text-slate-300 font-playfair font-light animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            별바다의 끝에서 닿은 메아리
          </h2>
          <p
            className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            세계가 영웅을 구한다는 이야기
          </p>

          <div
            className="flex justify-center gap-4 mb-16 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              분석 읽기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent/50 hover:border-accent text-accent"
            >
              더 알아보기
            </Button>
          </div>

          <div className="animate-bounce" style={{ animationDelay: "0.8s" }}>
            <ChevronDown className="w-8 h-8 mx-auto text-accent" />
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="overview"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["overview"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              명조 3.3의 핵심 주제
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  세계가 영웅을 구한다
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  전통적인 영웅담의 반전. 영웅이 세계를 구하는 것이 아니라,
                  세계의 모든 사람이 함께 영웅을 구성하고, 그들의 노력이 영웅을
                  만든다는 철학적 메시지.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  희생의 의미화
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 파트에서 수천만 명이 희생되지만, 그들의 희생은 단순한
                  죽음이 아니라 데이터로 변환되어 좌표를 이루고, 그 좌표가 길이
                  되어 영웅을 인도한다.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  집단의 힘
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  개인의 노력은 미미하지만, 수천만 명이 함께 나아갈 때 그것은
                  우주의 메시지가 되고, 절대 불가능해 보이는 것도 가능하게
                  만든다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Black Hole Section - 4 Stages */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/50 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="detailed-analysis"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["detailed-analysis"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent">
              좌표 형성의 기하학적 구조
            </h2>

            <div className="space-y-12">
              {/* Stage 1: Center Point */}
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  1단계: 중심점과 개인
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      블랙홀 내에서 엑소스트라이더의 빛은 절대적인 중심(★)이
                      됩니다. 각 개인은 이 중심을 향해 나아가며, 자신이 걸어간
                      거리와 각도를 기록합니다. 이것이 좌표의 기초가 됩니다.
                    </p>
                    <p className="border-l-4 border-accent pl-4 py-2 italic text-accent">
                      "중심을 향해 나아가는 각 개인의 경로 = 거리 + 각도 +
                      주파수"
                    </p>
                  </div>
                  <img
                    src="../image/1.webp"
                    alt="1단계: 중심점과 개인"
                    className="rounded-lg shadow-lg border border-accent/20 w-full"
                  />
                </div>
              </Card>

              {/* Stage 2: Path Data */}
              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  2단계: 경로의 데이터화
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610674087/S95DyMAVW3t8ozUjmMqgqM/stage2_path_data-a1b2c3d4.webp"
                    alt="2단계: 경로의 데이터화"
                    className="rounded-lg shadow-lg border border-accent/20 w-full"
                  />
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      도중에 실패하거나 사라지더라도, 그들이 걸어간 경로는
                      사라지지 않습니다. 각자의 이동 궤적이 데이터로 기록되며,
                      이는 "주파수"라는 형태로 저장됩니다. 실패한 시도도 완전한
                      좌표계를 만드는 데 필수적인 정보가 됩니다.
                    </p>
                    <p className="border-l-4 border-accent pl-4 py-2 italic text-accent">
                      "실패한 경로도 좌표의 일부 = 모든 노력이 의미를 가짐"
                    </p>
                  </div>
                </div>
              </Card>

              {/* Stage 3: Sphere Formation */}
              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  3단계: 집단 데이터의 축적 - 구 형태의 형성
                </h3>
                <div className="space-y-6">
                  <div className="text-slate-300 leading-relaxed">
                    <p className="mb-4">
                      한 명의 기록은 미미하지만, 수백만, 수천만 명의 기록이
                      모이면 놀라운 일이 일어납니다. 모든 사람이 같은
                      중심(엑소스트라이더의 빛)을 향해 나아갔기 때문에, 각각의
                      경로들이 모여 3차원 구(Sphere) 형태를 이룹니다.
                    </p>
                  </div>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610674087/S95DyMAVW3t8ozUjmMqgqM/stage3_sphere_formation-e5f6g7h8.webp"
                    alt="3단계: 구 형태의 형성"
                    className="rounded-lg shadow-lg border border-accent/20 w-full max-w-2xl mx-auto"
                  />
                  <div className="grid md:grid-cols-3 gap-4 text-slate-300 text-sm">
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <p className="font-semibold text-accent mb-2">
                        희소한 점들
                      </p>
                      <p>초기 상태 - 개별 경로들이 흩어져 있음</p>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <p className="font-semibold text-accent mb-2">
                        촘촘한 구
                      </p>
                      <p>
                        최종 상태 - 수천만 명의 경로가 모여 완전한 구를 형성
                      </p>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <p className="font-semibold text-accent mb-2">
                        방사형 구조
                      </p>
                      <p>모든 경로가 중심을 향하므로 자연스럽게 구 형태가 됨</p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Stage 4: Voyager Coordinate */}
              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  4단계: 좌표의 완성과 활용 - 보이저호의 메시지
                </h3>
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4 text-slate-300 leading-relaxed">
                    <p>
                      이렇게 완성된 3차원 구 형태의 좌표는 단순한 데이터가
                      아닙니다. 이것은 수천만 명의 의지, 희망, 그리고 마지막
                      순간의 선택이 응축된 "지도"입니다. 마치 보이저호가 우주에
                      인류의 메시지를 담아 보낸 것처럼, 이 좌표는 모든 사람의
                      기록을 담은 우주의 메시지가 됩니다.
                    </p>
                    <p className="border-l-4 border-accent pl-4 py-2 italic text-accent">
                      "구 형태의 좌표 = 수천만 명이 함께 만든 길 = 우주에 보낸
                      인류의 메시지"
                    </p>
                  </div>
                  <img
                    src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610674087/S95DyMAVW3t8ozUjmMqgqM/stage4_voyager_coordinate-i9j0k1l2.webp"
                    alt="4단계: 보이저호 같은 좌표"
                    className="rounded-lg shadow-lg border border-accent/20 w-full"
                  />
                </div>
              </Card>

              {/* Black Hole Method */}
              <Card
                className="bg-gradient-to-r from-accent/15 to-accent/5 backdrop-blur border-accent/40 p-8 hover:border-accent/60 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.8s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  블랙홀 안에서 좌표를 찾을 수 있던 방법
                </h3>
                <div className="space-y-6 text-slate-300 leading-relaxed">
                  <p>
                    블랙홀 안에서의 좌표 형성은 다음과 같은 원리로 작동합니다.
                    블랙홀 내에서 점이 개인을 의미하고, 빛나는 부분이
                    엑소스트라이더의 빛이라고 생각하면, 각 개인은 그 빛을 향해
                    걸어가면서 거리를 재는 방식입니다.
                  </p>
                  <p>
                    물론 언제 닿을 수 있을지, 영원히 도달할 수 없을지도 모르는
                    거리입니다. 도중에 실패해서 사라지는 사람도 있었고, 그럼에도
                    불구하고 자신의 주파수를 사용하며 엑소스트라이더에게
                    나아갔습니다.
                  </p>
                  <div className="bg-accent/10 border-l-4 border-accent p-4 rounded">
                    <p className="font-semibold text-accent mb-2">
                      핵심: 방향(각도) + 거리
                    </p>
                    <p>
                      도착하면 방향(각도)과 거리를 알게 됩니다. 이를 한 명 한
                      명이 남은 주파수로 기록한 것입니다. 하지만 이것이 한 명이
                      아니라 수백, 수천만 명이 한다면?
                    </p>
                  </div>
                  <p className="border-l-4 border-accent pl-4 py-2 italic">
                    "이런 구(Sphere) 형태의 지도가 완성되는 것입니다."
                  </p>
                  <p>
                    사람이 많을수록 이 구가 더욱 촘촘해집니다. 각자가 걸어간
                    각도와 거리를 입력하면, 보이저호처럼 위치가 계산 가능해지는
                    것입니다.
                  </p>
                  <p>
                    특히 이 좌표를 사용하는 방랑자와 히유키의 시라토리(미래를
                    태우는 술법)까지 합해지니, 이렇게 찾을 수 있었던 것입니다.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Aleph One Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-purple-950/20 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="aleph-one"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["aleph-one"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              알레프 원 - 우주의 눈
            </h2>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 text-slate-300 leading-relaxed">
                <p>
                  알레프 원은 블랙홀과 닮아있지만 완전히 동일한 성질은 아닙니다.
                  그것은 우주의 의지를 담은 거대한 눈이자, 모든 것을 관찰하고
                  판단하는 절대적 존재입니다.
                </p>
                <p>
                  블랙홀 파트에서 수천만 명이 만든 좌표는 결국 알레프 원을
                  향하고 있었습니다. 엑소스트라이더가 그 좌표를 따라 나아갈 때,
                  알레프 원은 이미 그것을 알고 있었던 것입니다.
                </p>
                <p>
                  결전에서 엑소스트라이더는 리액터 드라이브 레플리카로 각성하며,
                  수천만 명의 주파수를 받아 새로운 생명을 얻습니다. 이것이
                  "세계가 영웅을 구한다"는 주제의 정점입니다.
                </p>
              </div>
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663610674087/S95DyMAVW3t8ozUjmMqgqM/aleph_one_eye-m1n2o3p4.webp"
                alt="알레프 원 - 우주의 눈"
                className="rounded-lg shadow-lg border border-accent/20 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Characters Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/40 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="characters"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["characters"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              주요 인물들의 역할
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  방랑자
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 파트의 중심 인물. 수천만 명의 좌표를 따라 나아가는
                  존재. 개인의 선택과 결정이 집단의 의지와 어떻게 연결되는지를
                  보여주는 캐릭터. 절망 속에서도 앞으로 나아가는 의지의 화신.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  에이메스
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  방랑자를 지키고 함께하는 존재. 개인의 희생이 어떻게 의미 있는
                  데이터로 변환되는지를 몸소 보여줍니다. 희생과 헌신의 의미를
                  구체적으로 실현하는 캐릭터.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  히유키
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  시라토리(미래를 태우는 술법)를 통해 좌표를 읽고 해석하는
                  능력을 가진 인물. 블랙홀에서 형성된 구 형태의 좌표를 최단
                  경로로 변환하여 방랑자를 인도한다. 지혜와 직관의 화신.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.6s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  엑소스트라이더
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 내에서 모든 사람이 향하는 절대적 중심. 리액터 드라이브
                  레플리카의 삽입으로 각성하며, 수천만 명의 주파수를 받아 새로운
                  생명을 얻는다. 희생이 어떻게 힘으로 변환되는지를 보여주는
                  존재.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story Distinction Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/50 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="distinction"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["distinction"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              명조 3.3의 차별점
            </h2>

            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  감정과 논리의 완벽한 결합
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  명조 3.3은 단순한 감정적 스토리가 아닙니다. 블랙홀 파트의
                  기하학적 구조, 좌표 형성의 논리, 그리고 수천만 명의 희생이라는
                  감정적 무게가 완벽하게 결합되어 있습니다. 한 장면이 감정,
                  설정, 주제를 모두 담당합니다.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  철학적 깊이
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  "세계가 영웅을 구한다"는 주제는 단순한 설정이 아닙니다. 이것은
                  개인과 집단, 희생과 보상, 절망과 희망에 대한 깊은 철학적
                  질문을 담고 있습니다. 각 캐릭터의 선택과 행동이 이 주제를
                  구체적으로 실현합니다.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.4s" }}
              >
                <h3 className="text-2xl font-bold mb-4 text-accent font-playfair">
                  시각적 표현의 혁신
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  블랙홀 파트에서 추상적인 개념(좌표, 주파수, 구 형태)을
                  시각적으로 표현하는 방식은 게임 스토리텔링의 새로운 기준을
                  제시합니다. 추상과 구체, 과학과 감정이 시각적으로 어떻게
                  표현될 수 있는지를 보여줍니다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* BGM Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-purple-950/30 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="bgm"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["bgm"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 font-playfair text-accent text-center">
              스토리를 담은 음악
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in">
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  블랙홀 파트 BGM
                </h3>
                <div className="mb-4">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/7nwzaBOmiYc"
                    title="Black Hole BGM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-slate-300 text-sm">
                  우주적 신비로움과 웅장함을 표현하는 음악. 수천만 명이 좌표를
                  형성하는 장면의 감정을 완벽하게 담아냅니다.
                </p>
              </Card>

              <Card
                className="bg-card/50 backdrop-blur border-border/50 p-8 hover:border-accent/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="text-2xl font-bold mb-6 text-accent font-playfair">
                  엑소스트라이더 각성 BGM
                </h3>
                <div className="mb-4">
                  <iframe
                    width="100%"
                    height="200"
                    src="https://www.youtube.com/embed/Gp0Jbhu0FWA"
                    title="Exostrider Awakening BGM"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                  ></iframe>
                </div>
                <p className="text-slate-300 text-sm">
                  절망에서 희망으로 변하는 감정, 리액터 드라이브 레플리카
                  삽입으로 새로운 생명을 얻는 순간의 장대함을 표현합니다.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="relative py-24 px-4 bg-gradient-to-b from-background via-slate-950/40 to-background">
        <div className="max-w-6xl mx-auto">
          <div
            id="summary"
            data-reveal
            className={`transition-all duration-1000 ${
              visibleElements["summary"]
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <Card className="bg-gradient-to-r from-accent/20 to-accent/10 backdrop-blur border-accent/50 p-12 hover:border-accent/70 transition-all duration-300 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 font-playfair text-accent text-center">
                결론
              </h2>
              <div className="space-y-6 text-slate-200 leading-relaxed text-lg">
                <p>
                  명조 3.3 「별바다의 끝에서 닿은 메아리」는 단순한 게임
                  스토리를 넘어, 철학적 메시지를 담은 예술 작품입니다.
                </p>
                <p>
                  블랙홀 파트에서 보여주는 "세계가 영웅을 구한다"는 주제는,
                  개인의 희생이 어떻게 의미 있는 데이터로 변환되고, 그
                  데이터들이 모여 길이 되며, 그 길 위에서 영웅이 세계를 구할 수
                  있게 만드는 과정을 보여줍니다.
                </p>
                <p>
                  감정과 논리, 추상과 구체, 과학과 철학이 완벽하게 결합된 이
                  스토리는, 게임 스토리텔링의 새로운 기준을 제시하며,
                  플레이어에게 깊은 감동과 함께 오래 남는 인상을 남깁니다.
                </p>
                <p className="border-l-4 border-accent pl-6 py-2 italic text-accent text-xl font-semibold">
                  "모든 노력이 의미를 가지며, 집단의 힘은 불가능을 가능하게
                  만든다."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 bg-gradient-to-b from-background to-slate-950">
        <div className="max-w-6xl mx-auto text-center">
          <div className="space-y-4">
            <p className="text-slate-400">
              명조 3.3 「별바다의 끝에서 닿은 메아리」 스토리 분석
            </p>
            <p className="text-slate-500 text-sm">
              © 2026 Wuthering Waves Story Analysis | 모든 이미지와 음악은
              원작자의 저작권에 따릅니다.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
