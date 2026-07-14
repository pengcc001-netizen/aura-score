export interface AuraType {
  slug: string;
  name: string;
  emoji: string;
  description: string;
  range: string;
  traits: string[];
  color: string;
}

export const auraTypes: AuraType[] = [
  { slug: "aura-billionaire", name: "Aura Billionaire", emoji: "👑", description: "You operate at a level of aura that most people cannot comprehend. Your presence changes the temperature of every room you enter. People remember interactions with you for years.", range: "500,000+", traits: ["Magnetic", "Unforgettable", "Influential", "Legendary"], color: "#FFD700" },
  { slug: "aura-millionaire", name: "Aura Millionaire", emoji: "💎", description: "You are in the top tier of aura holders. People gravitate toward you naturally, and your social capital is evident to everyone you meet. You make lasting impressions.", range: "100,000 - 500,000", traits: ["Charismatic", "Confident", "Memorable", "Respected"], color: "#D4AF37" },
  { slug: "aura-tycoon", name: "Aura Tycoon", emoji: "🏦", description: "Your aura account is well-funded. You consistently generate positive impressions and have built a reputation that precedes you. People seek you out.", range: "50,000 - 100,000", traits: ["Warm", "Capable", "Trustworthy", "Engaging"], color: "#C0C0C0" },
  { slug: "aura-entrepreneur", name: "Aura Entrepreneur", emoji: "📈", description: "You are building your aura portfolio with smart investments. Some setbacks, but the trajectory is upward. People generally enjoy your company.", range: "20,000 - 50,000", traits: ["Approachable", "Interesting", "Growing", "Promising"], color: "#B8860B" },
  { slug: "aura-middle-class", name: "Aura Middle Class", emoji: "🏠", description: "Your aura is stable and comfortable. Not flashy, but reliable. You have good days and bad days, but your baseline is positive. Friends value your consistency.", range: "5,000 - 20,000", traits: ["Reliable", "Steady", "Friendly", "Balanced"], color: "#808080" },
  { slug: "aura-startup", name: "Aura Startup", emoji: "🌱", description: "Your aura is in the early stages. You have potential but need more capital. Focus on small, consistent deposits to build your account over time.", range: "1,000 - 5,000", traits: ["Developing", "Curious", "Learning", "Raw"], color: "#90EE90" },
  { slug: "aura-ghost", name: "Aura Ghost", emoji: "👻", description: "Your aura presence is barely detectable. You move through social spaces without leaving much trace. This is not necessarily bad — ghosts have freedom.", range: "0 - 1,000", traits: ["Quiet", "Observant", "Unnoticed", "Independent"], color: "#A0A0A0" },
  { slug: "aura-debtor", name: "Aura Debtor", emoji: "📉", description: "Your aura account is in the red. Recent events have drained your social capital. Time to make some deposits through kindness, humor, and presence.", range: "-1,000 to 0", traits: ["Recovering", "Humbled", "Reflecting", "Rebuilding"], color: "#F87171" },
  { slug: "aura-bankrupt", name: "Aura Bankrupt", emoji: "💔", description: "Your aura has taken significant hits. Major events have damaged your social standing. The road back is long but not impossible — every journey starts with one deposit.", range: "-10,000 to -1,000", traits: ["Struggling", "Overwhelmed", "Need support", "At rock bottom"], color: "#EF4444" },
  { slug: "aura-nuclear-meltdown", name: "Aura Nuclear Meltdown", emoji: "☢️", description: "Your aura account has been devastated by catastrophic events. The good news? It can only go up from here. The bad news? It will take time, effort, and some truly heroic aura events to recover.", range: "-∞ to -10,000", traits: ["Devastated", "Rebuilding from zero", "Cautionary tale", "Survivor"], color: "#DC2626" },
]
