// "use client";

// import { useEffect, useState } from 'react';
// import { motion } from '@/lib/motion';
// import { Check, HelpCircle } from 'lucide-react';
// import { Button } from '@/components/ui/button';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";

// const plans = [
//   {
//     name: "Free",
//     price: "0",
//     description: "Perfect for trying out Valtech",
//     features: [
//       "3 courses per month",
//       "Basic AI content generation",
//       "5 YouTube videos per chapter",
//       "Export to PDF",
//       "Community support"
//     ],
//     popular: false,
//     buttonText: "Get Started"
//   },
//   {
//     name: "Pro",
//     price: "29",
//     description: "For educators and content creators",
//     features: [
//       "Unlimited courses",
//       "Advanced AI content generation",
//       "Unlimited YouTube videos",
//       "Multiple export formats",
//       "Custom branding",
//       "Priority support",
//       "Analytics dashboard"
//     ],
//     popular: true,
//     buttonText: "Start Free Trial"
//   },
//   {
//     name: "Enterprise",
//     price: "Custom",
//     description: "For organizations and institutions",
//     features: [
//       "Everything in Pro",
//       "Custom AI training",
//       "LMS integration",
//       "API access",
//       "User management",
//       "SSO authentication",
//       "Dedicated support"
//     ],
//     popular: false,
//     buttonText: "Contact Sales"
//   }
// ];

// export default function Pricing() {
//   const [mounted, setMounted] = useState(false);
//   const [annual, setAnnual] = useState(true);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) return null;

//   return (
//     <section id="pricing" className="py-20">
//       <div className="container mx-auto px-4">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.5 }}
//           className="text-center max-w-3xl mx-auto mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             Simple, Transparent Pricing
//           </h2>
//           <p className="text-xl text-muted-foreground mb-8">
//             Choose the plan that's right for you
//           </p>
          
//           <div className="flex items-center justify-center mb-8">
//             <span className={`mr-3 ${!annual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>Monthly</span>
//             <button
//               onClick={() => setAnnual(!annual)}
//               className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
//               style={{ 
//                 backgroundColor: annual ? 'hsl(var(--primary))' : 'hsl(var(--muted))' 
//               }}
//             >
//               <span
//                 className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform"
//                 style={{
//                   transform: annual ? 'translateX(calc(100% - 2px))' : 'translateX(1px)'
//                 }}
//               ></span>
//             </button>
//             <span className={`ml-3 ${annual ? 'text-foreground font-medium' : 'text-muted-foreground'}`}>
//               Annual <span className="text-xs text-primary">Save 20%</span>
//             </span>
//           </div>
//         </motion.div>

//         <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true, margin: "-100px" }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//             >
//               <Card className={`relative h-full flex flex-col ${plan.popular ? 'border-primary shadow-lg' : ''}`}>
//                 {plan.popular && (
//                   <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
//                     Most Popular
//                   </div>
//                 )}
                
//                 <CardHeader>
//                   <CardTitle className="text-xl">{plan.name}</CardTitle>
//                   <CardDescription>{plan.description}</CardDescription>
//                 </CardHeader>
                
//                 <CardContent className="flex-grow">
//                   <div className="mb-6">
//                     <span className="text-4xl font-bold">
//                       {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
//                     </span>
//                     {plan.price !== "Custom" && (
//                       <span className="text-muted-foreground ml-1">
//                         /{annual ? 'year' : 'month'}
//                       </span>
//                     )}
//                   </div>
                  
//                   <ul className="space-y-3">
//                     {plan.features.map((feature, i) => (
//                       <li key={i} className="flex items-start gap-2">
//                         <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
//                         <span>{feature}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </CardContent>
                
//                 <CardFooter>
//                   <Button 
//                     className={`w-full ${plan.popular ? '' : 'bg-card hover:bg-card/80 text-foreground border border-border'}`}
//                     variant={plan.popular ? "default" : "outline"}
//                   >
//                     {plan.buttonText}
//                   </Button>
//                 </CardFooter>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
        
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-100px" }}
//           transition={{ duration: 0.5 }}
//           className="mt-16 text-center"
//         >
//           <h3 className="text-2xl font-semibold mb-4">
//             Frequently Asked Questions
//           </h3>
          
//           <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6 text-left">
//             <div>
//               <h4 className="font-medium mb-2">Can I cancel my subscription anytime?</h4>
//               <p className="text-muted-foreground">Yes, you can cancel your subscription at any time with no questions asked.</p>
//             </div>
//             <div>
//               <h4 className="font-medium mb-2">What happens to my courses if I cancel?</h4>
//               <p className="text-muted-foreground">You'll still have access to export your existing courses, but won't be able to create new ones.</p>
//             </div>
//             <div>
//               <h4 className="font-medium mb-2">Do you offer discounts for educational institutions?</h4>
//               <p className="text-muted-foreground">Yes, we offer special pricing for schools and universities. Contact our sales team for details.</p>
//             </div>
//             <div>
//               <h4 className="font-medium mb-2">How accurate is the AI content generation?</h4>
//               <p className="text-muted-foreground">Our AI produces high-quality content that typically requires minimal editing, but we always recommend reviewing it.</p>
//             </div>
//           </div>
          
//           <TooltipProvider>
//             <Tooltip>
//               <TooltipTrigger asChild>
//                 <p className="text-sm text-muted-foreground mt-8 flex items-center justify-center gap-1">
//                   Have more questions? <HelpCircle className="h-4 w-4" />
//                 </p>
//               </TooltipTrigger>
//               <TooltipContent>
//                 <p>Contact our support team at support@valtech.com</p>
//               </TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         </motion.div>
//       </div>
//     </section>
//   );
// }