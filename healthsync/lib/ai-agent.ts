// lib/ai-agent.ts

export function recommendPrograms(symptoms: string) {
    const lower = symptoms.toLowerCase();
    const recommendations: string[] = [];
  
    if (lower.includes('cough') || lower.includes('fever')) {
      recommendations.push('TB');
      recommendations.push('Malaria');
    }
    if (lower.includes('fatigue') || lower.includes('weight loss')) {
      recommendations.push('HIV');
    }
    return recommendations;
  }
  