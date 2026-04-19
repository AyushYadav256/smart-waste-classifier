import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search, Leaf, Recycle, Trash2, AlertTriangle,
  ArrowRight, X, ChevronRight, CheckCircle2
} from "lucide-react";
import { wasteDatabase, WasteItem, Category } from "@/data/wasteData";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const CATEGORIES: { id: Category | "all"; label: string }[] = [
  { id: "all",     label: "All Items" },
  { id: "plastic", label: "Plastic"   },
  { id: "organic", label: "Organic"   },
  { id: "paper",   label: "Paper"     },
  { id: "ewaste",  label: "E-Waste"   },
  { id: "glass",   label: "Glass"     },
  { id: "metal",   label: "Metal"     },
  { id: "other",   label: "Other"     },
];

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<Category | "all">("all");
  const [selectedItem, setSelectedItem] = useState<WasteItem | null>(null);

  const filteredItems = useMemo(() => {
    let items = wasteDatabase;
    if (selectedCategory !== "all")
      items = items.filter(item => item.category === selectedCategory);
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      items = items.filter(item =>
        item.name.toLowerCase().includes(q) ||
        item.aliases.some(a => a.toLowerCase().includes(q))
      );
    }
    return items;
  }, [searchQuery, selectedCategory]);

  const handleSelect = (item: WasteItem) => { setSelectedItem(item); setSearchQuery(""); };
  const handleClear  = ()               => { setSelectedItem(null);  setSearchQuery(""); };

  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans">

      {/* Header */}
      <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center">
          <div className="flex items-center gap-2 text-primary">
            <Leaf className="w-6 h-6" />
            <span className="font-bold text-lg tracking-tight">EcoSort</span>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-4xl mx-auto w-full px-4 py-8 md:py-12 flex flex-col gap-8">

        {/* Hero */}
        <section className="text-center space-y-4 mb-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            How do I dispose of...
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Search any item to instantly find out if it's recyclable, compostable,
            or destined for the trash.
          </p>
        </section>

        {/* Search */}
        <section className="relative w-full max-w-2xl mx-auto z-20">
          <div className="relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="w-6 h-6 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <Input
              type="text"
              placeholder="e.g. plastic bottle, banana peel, old phone..."
              className="w-full h-16 pl-12 pr-12 text-lg md:text-xl rounded-2xl shadow-sm border-2
                         border-border focus-visible:border-primary focus-visible:ring-primary/20
                         bg-card transition-all placeholder:text-muted-foreground/60"
              value={searchQuery}
              onChange={e => { setSearchQuery(e.target.value); if (selectedItem) setSelectedItem(null); }}
              data-testid="input-search"
            />
            {searchQuery && !selectedItem && (
              <button onClick={() => setSearchQuery("")}
                className="absolute inset-y-0 right-4 flex items-center text-muted-foreground hover:text-foreground">
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Autocomplete Dropdown */}
          <AnimatePresence>
            {searchQuery && !selectedItem && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-card rounded-xl shadow-xl border border-border overflow-hidden z-30"
              >
                {filteredItems.length > 0 ? (
                  <ul className="max-h-[60vh] overflow-y-auto py-2">
                    {filteredItems.slice(0, 6).map(item => (
                      <li key={item.id}>
                        <button onClick={() => handleSelect(item)}
                          className="w-full text-left px-4 py-3 hover:bg-muted/50 transition-colors flex items-center justify-between">
                          <div>
                            <p className="font-semibold">{item.name}</p>
                            <p className="text-sm text-muted-foreground">Also: {item.aliases.join(", ")}</p>
                          </div>
                          <ChevronRight className="w-5 h-5 text-muted-foreground" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-8 text-center text-muted-foreground">
                    <p>We don't have info on "{searchQuery}" yet.</p>
                    <p className="text-sm mt-2">Try a broader term or browse a category below.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </section>

        {/* Result Card / Browse Grid */}
        <AnimatePresence mode="wait">
          {selectedItem ? (
            <motion.div key="result"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1,    y: 0  }}
              exit={{   opacity: 0, scale: 0.95, y: 20  }}
              className="w-full max-w-2xl mx-auto"
              data-testid="card-result"
            >
              <Card className="overflow-hidden border-2 shadow-lg">
                <div className="p-6 md:p-8 bg-card relative">
                  <button onClick={handleClear}
                    className="absolute top-4 right-4 p-2 text-muted-foreground hover:bg-muted rounded-full transition-colors">
                    <X className="w-5 h-5" />
                  </button>

                  <Badge variant="outline" className="uppercase tracking-wider font-mono text-xs mb-4">
                    {selectedItem.category}
                  </Badge>

                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{selectedItem.name}</h2>

                  {/* Recyclable Status */}
                  <div
                    data-testid="status-recyclable"
                    className={`rounded-2xl p-6 mb-8 flex items-center gap-4 ${
                      selectedItem.recyclable === true
                        ? "bg-emerald-100 text-emerald-900 dark:bg-emerald-900/30 dark:text-emerald-300"
                        : selectedItem.recyclable === false
                        ? "bg-rose-100 text-rose-900 dark:bg-rose-900/30 dark:text-rose-300"
                        : "bg-amber-100 text-amber-900 dark:bg-amber-900/30 dark:text-amber-300"
                    }`}
                  >
                    {selectedItem.recyclable === true  ? <Recycle       className="w-10 h-10 shrink-0" /> :
                     selectedItem.recyclable === false ? <Trash2        className="w-10 h-10 shrink-0" /> :
                                                        <AlertTriangle className="w-10 h-10 shrink-0" />}
                    <p className="text-2xl font-bold">
                      {selectedItem.recyclable === true  ? "Recyclable"     :
                       selectedItem.recyclable === false ? "Not Recyclable" : "Special Disposal"}
                    </p>
                  </div>

                  <div className="space-y-6">
                    {/* Disposal Method */}
                    <div>
                      <h3 className="text-lg font-bold flex items-center gap-2 mb-2">
                        <ArrowRight className="w-5 h-5 text-primary" /> How to dispose
                      </h3>
                      <p className="text-muted-foreground leading-relaxed text-lg pl-7">
                        {selectedItem.disposalMethod}
                      </p>
                    </div>

                    {/* Eco Alternative */}
                    <div className="bg-primary/5 rounded-xl p-5 border border-primary/10">
                      <h3 className="font-bold flex items-center gap-2 mb-2 text-primary">
                        <Leaf className="w-5 h-5" /> Eco-friendly alternative
                      </h3>
                      <p className="text-foreground leading-relaxed">{selectedItem.ecoAlternative}</p>
                    </div>
                  </div>
                </div>

                {/* Eco Score Footer */}
                <div className="bg-muted/50 border-t border-border p-6 flex flex-col md:flex-row md:items-center gap-4 justify-between">
                  <div>
                    <p className="font-bold text-sm text-muted-foreground uppercase tracking-wide mb-1">
                      Eco Impact Score
                    </p>
                    <p className="text-sm">{selectedItem.ecoScoreReason}</p>
                  </div>
                  <div
                    data-testid="badge-ecoscore"
                    className={`shrink-0 px-4 py-2 rounded-full font-bold text-sm uppercase tracking-wider flex items-center gap-2 ${
                      selectedItem.ecoScore === "good" ? "bg-emerald-500 text-white" :
                      selectedItem.ecoScore === "okay" ? "bg-amber-500  text-white" :
                                                         "bg-rose-500   text-white"
                    }`}
                  >
                    {selectedItem.ecoScore === "good" && <CheckCircle2 className="w-4 h-4" />}
                    {selectedItem.ecoScore}
                  </div>
                </div>
              </Card>

              <div className="text-center mt-8">
                <Button variant="ghost" onClick={handleClear}>Search another item</Button>
              </div>
            </motion.div>
          ) : (
            <motion.div key="browse"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="w-full"
            >
              {/* Category Filter Chips */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
                {CATEGORIES.map(cat => (
                  <button key={cat.id} onClick={() => setSelectedCategory(cat.id)}
                    data-testid={`filter-${cat.id}`}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      selectedCategory === cat.id
                        ? "bg-primary text-primary-foreground shadow-md scale-105"
                        : "bg-card text-muted-foreground hover:bg-muted border border-border"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Items Grid */}
              {searchQuery === "" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredItems.map((item, i) => (
                    <motion.div key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <button onClick={() => handleSelect(item)} className="w-full text-left h-full">
                        <Card className="h-full p-4 hover:border-primary/50 hover:shadow-md transition-all group flex flex-col justify-between bg-card">
                          <div className="flex justify-between items-start mb-3">
                            <Badge variant="secondary" className="text-[10px] font-mono">{item.category}</Badge>
                            <div className={`w-3 h-3 rounded-full ${
                              item.recyclable === true  ? "bg-emerald-500" :
                              item.recyclable === false ? "bg-rose-500"    : "bg-amber-500"
                            }`} />
                          </div>
                          <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                            {item.name}
                          </h3>
                        </Card>
                      </button>
                    </motion.div>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
